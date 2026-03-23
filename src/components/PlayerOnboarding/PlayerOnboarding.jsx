import "./PlayerOnboarding.css";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useXAPI, XAPI_VERBS, ECHO_ACTIVITIES, XAPI_EXTENSIONS } from "../../contexts/XAPIProvider.jsx";
import { useStats } from "../../contexts/StatsProvider.jsx";
import statementsData from "../../pages/CommunityNote/CommunityNoteStatements.json";

export const PlayerOnboarding = ({ onComplete }) => {
  const { i18n, t } = useTranslation();
  const { initializeActor, sendStatement } = useXAPI();
  const { startEscapeTimer } = useStats();
  const [step, setStep] = useState("playerForm");
  const [playerName, setPlayerName] = useState("");
  const [playerAge, setPlayerAge] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [errors, setErrors] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [selectedStatements, setSelectedStatements] = useState([]);
  const [videoAvailability, setVideoAvailability] = useState({ intro1: false, intro2: false });

  const tx = (key, options = {}) => t(key, { lng: selectedLanguage, ...options });

  const validateForm = () => {
    const newErrors = {};
    
    if (!playerName.trim()) {
      newErrors.name = tx("playerOnboarding.nameErrorEmpty");
    } else if (playerName.trim().length < 2) {
      newErrors.name = tx("playerOnboarding.nameErrorShort");
    }
    
    if (!playerAge) {
      newErrors.age = tx("playerOnboarding.ageErrorEmpty");
    } else if (playerAge < 1 || playerAge > 120) {
      newErrors.age = tx("playerOnboarding.ageErrorInvalid");
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const statements = useMemo(
    () => statementsData[selectedLanguage] || statementsData.en || [],
    [selectedLanguage]
  );

  const requiredSelections = useMemo(() => {
    const spanishStatements = statementsData.es || [];
    const totalCorrect = spanishStatements.filter((statement) => statement.correct).length;
    return totalCorrect > 0 ? totalCorrect : 2;
  }, []);

  const moderatorFormTitle = t("playerOnboarding.moderatorFormTitle");
  const moderatorFormDescription = t("playerOnboarding.moderatorFormDescription", {
    lng: selectedLanguage,
    count: requiredSelections,
  });
  const moderatorFormSubmit = t("playerOnboarding.moderatorFormSubmit", { lng: selectedLanguage });
  const appName = t("header.appName", { lng: selectedLanguage });

  const getVideoPath = (introNumber, language) => `/assets/intro${introNumber}_${language}.mp4`;

  const checkVideoExists = async (path) => {
    const canUseDom = typeof window !== "undefined" && typeof document !== "undefined";
    if (!canUseDom) return false;

    return new Promise((resolve) => {
      const probeVideo = document.createElement("video");
      let finished = false;

      const finish = (result) => {
        if (finished) return;
        finished = true;
        clearTimeout(timeoutId);
        probeVideo.removeAttribute("src");
        probeVideo.load();
        resolve(result);
      };

      const timeoutId = window.setTimeout(() => finish(false), 2500);

      probeVideo.preload = "metadata";
      probeVideo.onloadedmetadata = () => finish(true);
      probeVideo.onerror = () => finish(false);
      probeVideo.src = path;
    });
  };

  const completeOnboarding = (data) => {
    // Reiniciar credenciales de la red social para cada nueva partida
    sessionStorage.removeItem("socialLoginDone");

    const finalizedPlayerData = {
      ...data,
      onboardingCompleted: true,
    };

    sessionStorage.setItem("playerData", JSON.stringify(finalizedPlayerData));

    // Notificar al resto de la app que el onboarding termino
    window.dispatchEvent(new Event("onboardingComplete"));

    // El countdown del escape room comienza al terminar la intro final.
    startEscapeTimer();

    // Notificar al componente padre
    onComplete(finalizedPlayerData);
  };

  const handleStatementClick = (id) => {
    setSelectedStatements((prev) => {
      if (prev.includes(id)) {
        return prev.filter((statementId) => statementId !== id);
      }
      if (prev.length < requiredSelections) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const handlePretestSubmit = () => {
    const selectedDetails = statements
      .filter((statement) => selectedStatements.includes(statement.id))
      .map((statement) => ({
        id: statement.id,
        text: statement.text,
        correct: Boolean(statement.correct),
      }));
    const correctTrueCount = selectedDetails.filter((s) => s.correct).length;
    const correctFalseCount = selectedDetails.length - correctTrueCount;

    const responseText = selectedDetails.map((s) => `${s.id}: ${s.text}`).join(" | ");

    sendStatement(
      XAPI_VERBS.ANSWERED,
      {
        id: `${ECHO_ACTIVITIES.INTRO.id}/pre-test`,
        definition: {
          name: { en: "Onboarding Pre-Test" },
          type: "http://adlnet.gov/expapi/activities/assessment",
          interactionType: "choice",
        },
      },
      {
        response: responseText,
        completion: true,
        extensions: {
          "https://endgameproject.github.io/xapi/ext/onboardingPretestSelections": selectedDetails.map(
            (s) => ({
              id: s.id,
              text: s.text,
              correct: s.correct,
            })
          ),
          "https://endgameproject.github.io/xapi/ext/onboardingPretestCorrectTrueCount": correctTrueCount,
          "https://endgameproject.github.io/xapi/ext/onboardingPretestCorrectFalseCount": correctFalseCount,
        },
      },
      {
        contextActivities: {
          parent: [ECHO_ACTIVITIES.INTRO],
          grouping: [ECHO_ACTIVITIES.GAME],
        },
      }
    );

    sessionStorage.setItem(
      "onboardingCommunityNoteAnswers",
      JSON.stringify({
        language: selectedLanguage,
        selectedStatementIds: selectedStatements,
        selectedStatements: selectedDetails.map(({ id, text }) => ({ id, text })),
        submittedAt: new Date().toISOString(),
      })
    );

    if (videoAvailability.intro2) {
      setStep("intro2Video");
      return;
    }

    completeOnboarding(playerData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const nextPlayerData = {
        name: playerName.trim(),
        age: parseInt(playerAge),
        language: selectedLanguage,
      };

      setPlayerData(nextPlayerData);

      // Cambiar el idioma de la aplicación antes del test
      i18n.changeLanguage(selectedLanguage);

      // Inicializar el actor xAPI temprano para que esté disponible en el pre-test
      const initializedActor = initializeActor(nextPlayerData);

      // Enviar STARTED del juego una sola vez al completar el formulario de onboarding.
      if (!sessionStorage.getItem("echo:gameStarted")) {
        sessionStorage.setItem("echo:gameStarted", "1");
        sendStatement(
          XAPI_VERBS.STARTED,
          ECHO_ACTIVITIES.GAME,
          null,
          {
            contextActivities: {
              parent: [ECHO_ACTIVITIES.INTRO],
              grouping: [ECHO_ACTIVITIES.GAME],
            },
            extensions: {
              [XAPI_EXTENSIONS.PLAYER_AGE]: parseInt(nextPlayerData.age, 10),
              [XAPI_EXTENSIONS.LANG]: nextPlayerData.language,
            },
          },
          initializedActor
        );
      }

      const intro1Path = getVideoPath(1, selectedLanguage);
      const intro2Path = getVideoPath(2, selectedLanguage);
      const [hasIntro1, hasIntro2] = await Promise.all([
        checkVideoExists(intro1Path),
        checkVideoExists(intro2Path),
      ]);

      const nextAvailability = { intro1: hasIntro1, intro2: hasIntro2 };
      setVideoAvailability(nextAvailability);
      setSelectedStatements([]);

      if (nextAvailability.intro1) {
        setStep("intro1Video");
      } else {
        setStep("pretest");
      }
    }
  };

  const intro1Path = getVideoPath(1, selectedLanguage);
  const intro2Path = getVideoPath(2, selectedLanguage);

  const isIntro1VideoStep = step === "intro1Video" && videoAvailability.intro1;
  const isIntro2VideoStep = step === "intro2Video" && videoAvailability.intro2;

  if (isIntro1VideoStep) {
    return (
      <div className="onboarding-overlay onboarding-overlay-video">
        <video
          className="onboarding-video-fullscreen"
          src={intro1Path}
          autoPlay
          playsInline
          controls={false}
          onEnded={() => setStep("pretest")}
          onError={() => setStep("pretest")}
        />
      </div>
    );
  }

  if (isIntro2VideoStep) {
    return (
      <div className="onboarding-overlay onboarding-overlay-video">
        <video
          className="onboarding-video-fullscreen"
          src={intro2Path}
          autoPlay
          playsInline
          controls={false}
          onEnded={() => completeOnboarding(playerData)}
          onError={() => completeOnboarding(playerData)}
        />
      </div>
    );
  }

  return (
    <div className="onboarding-overlay">
      <div className={`onboarding-container ${step === "pretest" ? "onboarding-container--wide" : ""}`}>
        {step === "playerForm" && (
          <>
            <div className="onboarding-header">
              <h1 className="onboarding-title">{appName}</h1>
              <p className="onboarding-subtitle">{tx("playerOnboarding.subtitle")}</p>
            </div>

            <form className="onboarding-form" onSubmit={handleSubmit}>
              <div className="onboarding-field">
                <label htmlFor="playerName" className="onboarding-label">
                  {tx("playerOnboarding.nameLabel")}
                </label>
                <input
                  id="playerName"
                  type="text"
                  className={`onboarding-input ${errors.name ? "error" : ""}`}
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder={tx("playerOnboarding.namePlaceholder")}
                  maxLength={30}
                />
                {errors.name && <span className="onboarding-error">{errors.name}</span>}
              </div>

              <div className="onboarding-field">
                <label htmlFor="playerAge" className="onboarding-label">
                  {tx("playerOnboarding.ageLabel")}
                </label>
                <input
                  id="playerAge"
                  type="number"
                  className={`onboarding-input ${errors.age ? "error" : ""}`}
                  value={playerAge}
                  onChange={(e) => setPlayerAge(e.target.value)}
                  placeholder={tx("playerOnboarding.agePlaceholder")}
                  min="1"
                  max="120"
                />
                {errors.age && <span className="onboarding-error">{errors.age}</span>}
              </div>

              <div className="onboarding-field">
                <label className="onboarding-label">{tx("playerOnboarding.languageLabel")}</label>
                <div className="language-grid">
                  <button
                    type="button"
                    className={`language-option ${selectedLanguage === "es" ? "selected" : ""}`}
                    onClick={() => setSelectedLanguage("es")}
                  >
                    <img src="https://flagcdn.com/w80/es.png" alt="ES" className="language-flag" />
                    <span className="language-name">Español</span>
                  </button>
                  <button
                    type="button"
                    className={`language-option ${selectedLanguage === "en" ? "selected" : ""}`}
                    disabled
                    onClick={() => setSelectedLanguage("en")}
                    title="Temporalmente deshabilitado"
                  >
                    <img src="https://flagcdn.com/w80/gb.png" alt="GB" className="language-flag" />
                    <span className="language-name">English</span>
                  </button>
                  <button
                    type="button"
                    className={`language-option ${selectedLanguage === "fi" ? "selected" : ""}`}
                    disabled
                    onClick={() => setSelectedLanguage("fi")}
                    title="Temporalmente deshabilitado"
                  >
                    <img src="https://flagcdn.com/w80/fi.png" alt="FI" className="language-flag" />
                    <span className="language-name">Suomi</span>
                  </button>
                  <button
                    type="button"
                    className={`language-option ${selectedLanguage === "sr" ? "selected" : ""}`}
                    disabled
                    onClick={() => setSelectedLanguage("sr")}
                    title="Temporalmente deshabilitado"
                  >
                    <img src="https://flagcdn.com/w80/rs.png" alt="RS" className="language-flag" />
                    <span className="language-name">Српски</span>
                  </button>
                </div>
              </div>

              <button type="submit" className="onboarding-submit">
                {tx("playerOnboarding.submitButton")}
              </button>
            </form>
          </>
        )}

        {step === "pretest" && (
          <div className="onboarding-step-content">
            <h2 className="onboarding-step-title">{moderatorFormTitle}</h2>
            <p className="onboarding-subtitle">{moderatorFormDescription}</p>

            <div className="onboarding-counter">
              {selectedStatements.length}/{requiredSelections} {tx("playerOnboarding.pretestCounter")}
            </div>

            <div className="onboarding-statements-list">
              {statements.map((statement) => {
                const isSelected = selectedStatements.includes(statement.id);
                return (
                  <button
                    key={statement.id}
                    type="button"
                    className={`onboarding-statement ${isSelected ? "selected" : ""}`}
                    onClick={() => handleStatementClick(statement.id)}
                  >
                    <span className="onboarding-statement-check">{isSelected ? "✓" : ""}</span>
                    <span>{statement.text}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="onboarding-submit"
              onClick={handlePretestSubmit}
              disabled={selectedStatements.length !== requiredSelections}
            >
              {moderatorFormSubmit}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
