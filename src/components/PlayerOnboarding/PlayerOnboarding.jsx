import "./PlayerOnboarding.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const PlayerOnboarding = ({ onComplete }) => {
  const { i18n } = useTranslation();
  const [playerName, setPlayerName] = useState("");
  const [playerAge, setPlayerAge] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [errors, setErrors] = useState({});

  // Traducciones para el formulario inicial
  const translations = {
    es: {
      title: "ECHO",
      subtitle: "Bienvenido al Escaperoom de ECHO. ",
      nameLabel: "Nombre del jugador",
      namePlaceholder: "Ingresa tu nombre",
      nameErrorEmpty: "Por favor ingresa tu nombre",
      nameErrorShort: "El nombre debe tener al menos 2 caracteres",
      ageLabel: "Edad",
      agePlaceholder: "Ingresa tu edad",
      ageErrorEmpty: "Por favor ingresa tu edad",
      ageErrorInvalid: "Por favor ingresa una edad válida",
      languageLabel: "Idioma del juego",
      submitButton: "Comenzar juego"
    },
    en: {
      title: "ECHO",
      subtitle: "Welcome to ECHO's Escape Room. ",
      nameLabel: "Player name",
      namePlaceholder: "Enter your name",
      nameErrorEmpty: "Please enter your name",
      nameErrorShort: "Name must be at least 2 characters",
      ageLabel: "Age",
      agePlaceholder: "Enter your age",
      ageErrorEmpty: "Please enter your age",
      ageErrorInvalid: "Please enter a valid age",
      languageLabel: "Game language",
      submitButton: "Start game"
    },
    fi: {
      title: "ECHO",
      subtitle: "Tervetuloa ECHOn pakopeliin. ",
      nameLabel: "Pelaajan nimi",
      namePlaceholder: "Syötä nimesi",
      nameErrorEmpty: "Ole hyvä ja syötä nimesi",
      nameErrorShort: "Nimen on oltava vähintään 2 merkkiä",
      ageLabel: "Ikä",
      agePlaceholder: "Syötä ikäsi",
      ageErrorEmpty: "Ole hyvä ja syötä ikäsi",
      ageErrorInvalid: "Ole hyvä ja syötä kelvollinen ikä",
      languageLabel: "Pelin kieli",
      submitButton: "Aloita peli"
    },
    sr: {
      title: "ECHO",
      subtitle: "Dobrodošli u ECHO-ov Escape Room. ",
      nameLabel: "Ime igrača",
      namePlaceholder: "Unesite svoje ime",
      nameErrorEmpty: "Molimo unesite svoje ime",
      nameErrorShort: "Ime mora imati najmanje 2 karaktera",
      ageLabel: "Godine",
      agePlaceholder: "Unesite svoje godine",
      ageErrorEmpty: "Molimo unesite svoje godine",
      ageErrorInvalid: "Molimo unesite validne godine",
      languageLabel: "Jezik igre",
      submitButton: "Započni igru"
    }
  };

  // Obtener textos según el idioma seleccionado
  const texts = translations[selectedLanguage];

  const validateForm = () => {
    const newErrors = {};
    
    if (!playerName.trim()) {
      newErrors.name = texts.nameErrorEmpty;
    } else if (playerName.trim().length < 2) {
      newErrors.name = texts.nameErrorShort;
    }
    
    if (!playerAge) {
      newErrors.age = texts.ageErrorEmpty;
    } else if (playerAge < 1 || playerAge > 120) {
      newErrors.age = texts.ageErrorInvalid;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Reiniciar credenciales de la red social para cada nueva partida
      sessionStorage.removeItem("socialLoginDone");

      // Guardar información del jugador
      const playerData = {
        name: playerName.trim(),
        age: parseInt(playerAge),
        language: selectedLanguage,
        onboardingCompleted: true,
      };
      
      sessionStorage.setItem("playerData", JSON.stringify(playerData));
      
      // Cambiar el idioma de la aplicación
      i18n.changeLanguage(selectedLanguage);

      // Notificar al resto de la app que el onboarding termino
      window.dispatchEvent(new Event("onboardingComplete"));
      
      // Notificar al componente padre
      onComplete(playerData);
    }
  };

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-container">
        <div className="onboarding-header">
          <h1 className="onboarding-title">{texts.title}</h1>
          <p className="onboarding-subtitle">{texts.subtitle}</p>
        </div>

        <form className="onboarding-form" onSubmit={handleSubmit}>
          <div className="onboarding-field">
            <label htmlFor="playerName" className="onboarding-label">
              {texts.nameLabel}
            </label>
            <input
              id="playerName"
              type="text"
              className={`onboarding-input ${errors.name ? "error" : ""}`}
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder={texts.namePlaceholder}
              maxLength={30}
            />
            {errors.name && <span className="onboarding-error">{errors.name}</span>}
          </div>

          <div className="onboarding-field">
            <label htmlFor="playerAge" className="onboarding-label">
              {texts.ageLabel}
            </label>
            <input
              id="playerAge"
              type="number"
              className={`onboarding-input ${errors.age ? "error" : ""}`}
              value={playerAge}
              onChange={(e) => setPlayerAge(e.target.value)}
              placeholder={texts.agePlaceholder}
              min="1"
              max="120"
            />
            {errors.age && <span className="onboarding-error">{errors.age}</span>}
          </div>

          <div className="onboarding-field">
            <label className="onboarding-label">{texts.languageLabel}</label>
            <div className="language-grid">
              <button
                type="button"
                className={`language-option ${selectedLanguage === "es" ? "selected" : ""}`}
                onClick={() => setSelectedLanguage("es")}
              >
                <span className="language-flag">🇪🇸</span>
                <span className="language-name">Español</span>
              </button>
              <button
                type="button"
                className={`language-option ${selectedLanguage === "en" ? "selected" : ""}`}
                onClick={() => setSelectedLanguage("en")}
              >
                <span className="language-flag">🇬🇧</span>
                <span className="language-name">English</span>
              </button>
              <button
                type="button"
                className={`language-option ${selectedLanguage === "fi" ? "selected" : ""}`}
                onClick={() => setSelectedLanguage("fi")}
              >
                <span className="language-flag">🇫🇮</span>
                <span className="language-name">Suomi</span>
              </button>
              <button
                type="button"
                className={`language-option ${selectedLanguage === "sr" ? "selected" : ""}`}
                onClick={() => setSelectedLanguage("sr")}
              >
                <span className="language-flag">🇷🇸</span>
                <span className="language-name">Српски</span>
              </button>
            </div>
          </div>

          <button type="submit" className="onboarding-submit">
            {texts.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};
