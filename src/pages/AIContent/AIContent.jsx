import "./AIContent.css";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { useMessages } from "../../contexts/MessagesProvider.jsx";
import { useStats } from "../../contexts/StatsProvider.jsx";
import { useXAPI, XAPI_VERBS, ECHO_ACTIVITIES } from "../../contexts/XAPIProvider.jsx";
import aiContent from "./AIContent.json";

export const AIContent = () => {
    const { t } = useTranslation();
    const currentLang = t("langKey");
    const gameDataAllSentences = aiContent[currentLang] || aiContent.en;
    const gameData = useMemo(
        () => gameDataAllSentences[Math.floor(Math.random() * gameDataAllSentences.length)],
        [gameDataAllSentences]
    );
    const { addMessage } = useMessages();
    const { challenge2Completed, completeChallenge2 } = useStats();
    const { sendStatement } = useXAPI();
    const completionSentRef = useRef(false);
    const [step, setStep] = useState("list");
    const [selectedWords, setSelectedWords] = useState([]);
    const [wrongChoice, setWrongChoice] = useState(null);
    const [showMatch, setShowMatch] = useState(false);
    const optionsByStep = useMemo(
        () =>
            gameData.map((item) =>
                [item.correct, ...item.alts].sort(() => Math.random() - 0.5)
            ),
        []
    );
    const reconstructedSentence = useMemo(
        () => selectedWords.join(" ").replace(/\s([.,!?;:])/g, "$1"),
        [selectedWords]
    );
    const correctSentence = useMemo(
        () => gameData.map((item) => item.correct).join(" ").replace(/\s([.,!?;:])/g, "$1"),
        [gameData]
    );
    const isCompleted = selectedWords.length === gameData.length;

    useEffect(() => {
        if (!isCompleted) {
            setShowMatch(false);
            return;
        }

        const timer = setTimeout(() => setShowMatch(true), 260);
        return () => clearTimeout(timer);
    }, [isCompleted]);

    useEffect(() => {
        if (!isCompleted || challenge2Completed) return;

        const instructionsSent = sessionStorage.getItem("challenge3InstructionsSent");
        if (instructionsSent) return;

        // Send xAPI statement for completing the LLM message challenge
        if (!completionSentRef.current) {
            completionSentRef.current = true;
            sendStatement(
                XAPI_VERBS.COMPLETED,
                ECHO_ACTIVITIES.PUZZLE_2,
                {
                    success: true,
                    completion: true,
                    score: { scaled: 1, raw: gameData.length, min: 0, max: gameData.length },
                },
                {
                    contextActivities: {
                        parent: [ECHO_ACTIVITIES.GAME],
                        grouping: [ECHO_ACTIVITIES.GAME],
                    },
                }
            );
        }

        completeChallenge2();
        sessionStorage.setItem("challenge3InstructionsSent", JSON.stringify(true));
        addMessage({
            fromKey: "messagesApp.messages.challenge3.from",
            subjectKey: "messagesApp.messages.challenge3.subject",
            contentKey: "messagesApp.messages.challenge3.content",
        });

        toast(() => (
            <div>
                <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                    {t("messagesApp.newMessageNotification")}
                </p>
                <p style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
                    {t("messagesApp.challenge3Notification")}
                </p>
            </div>
        ), {
            duration: 4000,
            icon: "📬",
        });
    }, [addMessage, challenge2Completed, completeChallenge2, isCompleted, t, sendStatement, gameData.length]);

    const handleWordClick = (word) => {
        if (wrongChoice) return;
        const currentStep = selectedWords.length;
        const isCorrect = word === gameData[currentStep].correct;

        // Send xAPI statement for token selection
        sendStatement(
            XAPI_VERBS.ANSWERED,
            {
                id: `${ECHO_ACTIVITIES.PUZZLE_2.id}/token/${currentStep}`,
                definition: {
                    name: { en: `Select Token ${currentStep + 1}` },
                    type: "http://adlnet.gov/expapi/activities/cmi.interaction",
                    interactionType: "choice",
                    correctResponsesPattern: [gameData[currentStep].correct],
                },
            },
            {
                success: isCorrect,
                score: { scaled: isCorrect ? 1 : 0, raw: isCorrect ? 1 : 0, min: 0, max: 1 },
                response: word,
            },
            {
                contextActivities: {
                    parent: [ECHO_ACTIVITIES.PUZZLE_2],
                    grouping: [ECHO_ACTIVITIES.GAME],
                },
            }
        );

        if (isCorrect) {
            setSelectedWords([...selectedWords, word]);
        } else {
            setWrongChoice({ step: currentStep, word });
            setTimeout(() => {
                setSelectedWords([]);
                setWrongChoice(null);
            }, 550);
        }
    };

    return (
        <>
            <Header />
            <div className="app-container">
                <Navbar />

                <main className="feed ai-content-feed">
                    <div className="ai-content-page">
                        <div className="ai-content-frame">
                            {step === "list" ? (
                                <>
                                    <div className="ai-content-title">
                                        <h1>{t("aiContentPage.title")}</h1>
                                        <p>{t("aiContentPage.subtitle")}</p>
                                    </div>

                                    <section className="ai-content-panel">
                                        <div className="ai-content-alert">
                                            <div className="ai-content-alert-left">
                                                <span className="ai-alert-icon">!</span>
                                                <p>
                                                    <strong>{t("aiContentPage.pendingReviewCount", { count: 1 })}</strong>{" "}
                                                    {t("aiContentPage.pendingReviewText")}
                                                </p>
                                            </div>
                                            <button
                                                className={`ai-content-verify${challenge2Completed ? " ai-content-verify--done" : ""}`}
                                                type="button"
                                                onClick={() => !challenge2Completed && setStep("verify")}
                                                disabled={challenge2Completed}
                                            >
                                                {challenge2Completed ? `✓ ${t("aiContentPage.verifyButton")}` : t("aiContentPage.verifyButton")}
                                            </button>
                                        </div>

                                        <div className="ai-content-stats">
                                            <span className="ai-content-check">✓</span>
                                            <p>
                                                <strong>{t("aiContentPage.statsCount", { count: 24 })}</strong>{" "}
                                                {t("aiContentPage.statsText")}
                                            </p>
                                        </div>

                                        <div className="ai-content-grid">
                                            <article className="ai-content-card">
                                                <div className="ai-content-card-image ai-image-one" aria-hidden="true" />
                                                <div className="ai-content-card-body">
                                                    <h3>{t("aiContentPage.card1Title")}</h3>
                                                    <span className="ai-content-tag">{t("aiContentPage.tag")}</span>
                                                </div>
                                            </article>

                                            <article className="ai-content-card">
                                                <div className="ai-content-card-image ai-image-two" aria-hidden="true" />
                                                <div className="ai-content-card-body">
                                                    <h3>{t("aiContentPage.card2Title")}</h3>
                                                    <span className="ai-content-tag">{t("aiContentPage.tag")}</span>
                                                </div>
                                            </article>
                                        </div>

                                        <div className="ai-content-footer">
                                            <button className="ai-content-seeall" type="button">
                                                {t("aiContentPage.seeAll")}
                                            </button>
                                        </div>
                                    </section>
                                </>
                            ) : step === "verify" ? (
                                <section className="ai-verify-panel">
                                    <div className="ai-verify-header">
                                        <h1>{t("aiVerifyPage.title")}</h1>
                                        <p>{t("aiVerifyPage.subtitle")}</p>
                                    </div>

                                    <div className="ai-verify-card">
                                        <div className="ai-verify-avatar" aria-hidden="true" />
                                        <div className="ai-verify-body">
                                            <div className="ai-verify-meta">
                                                <span className="ai-verify-name">{t("aiVerifyPage.postTitle")}</span>
                                                <span className="ai-verify-handle">@quesofresco85</span>
                                                <span className="ai-verify-date">{t("aiVerifyPage.postDate")}</span>
                                            </div>
                                            <p className="ai-verify-blurred-text" aria-hidden="true">
                                                {correctSentence}
                                            </p>
                                        </div>
                                        <div className="ai-verify-stamp">{t("aiVerifyPage.stamp")}</div>
                                    </div>

                                    <p className="ai-verify-reminder">{t("aiVerifyPage.reminder")}</p>

                                    <div className="ai-verify-actions">
                                        <button
                                            className="ai-verify-back"
                                            type="button"
                                            onClick={() => setStep("list")}
                                        >
                                            {t("aiVerifyPage.back")}
                                        </button>
                                        <button
                                            className="ai-verify-start"
                                            type="button"
                                            onClick={() => setStep("video")}
                                        >
                                            {t("aiVerifyPage.start")}
                                        </button>
                                    </div>
                                </section>
                            ) : step === "video" ? (
                                <section className="ai-video-panel">
                                    <div className="ai-video-header">
                                        <h1>{t("aiVideoPage.title")}</h1>
                                        <p>{t("aiVideoPage.subtitle")}</p>
                                    </div>

                                    <div className="ai-video-container">
                                        {/* Video placeholder - será reemplazado con video en el futuro */}
                                    </div>

                                    <div className="ai-video-actions">
                                        <button
                                            className="ai-verify-back"
                                            type="button"
                                            onClick={() => setStep("verify")}
                                        >
                                            {t("aiVideoPage.back")}
                                        </button>
                                        <button
                                            className="ai-verify-start"
                                            type="button"
                                            onClick={() => setStep("brief")}
                                        >
                                            {t("aiVideoPage.nextStep")}
                                        </button>
                                    </div>
                                </section>
                            ) : step === "brief" ? (
                                <section className="ai-brief-panel">
                                    <div className="ai-brief-left">
                                        <div className="ai-brief-header">
                                            <h1>{t("aiChallengeBriefPage.title")}</h1>
                                        </div>

                                        <div className="ai-brief-content">
                                            <p className="ai-brief-system">
                                                {t("aiChallengeBriefPage.systemMessage").split(/<strong>|<\/strong>/).map((text, i) =>
                                                    i % 2 === 0 ? text : <strong key={i}>{text}</strong>
                                                )}
                                            </p>

                                            <p className="ai-brief-explanation">
                                                {t("aiChallengeBriefPage.explanation")}
                                            </p>

                                            <p className="ai-brief-instructions">
                                                {t("aiChallengeBriefPage.instructions").split(/<strong>|<\/strong>/).map((text, i) =>
                                                    i % 2 === 0 ? text : <strong key={i}>{text}</strong>
                                                )}
                                            </p>
                                        </div>

                                        <button
                                            className="ai-brief-button"
                                            onClick={() => setStep("game")}
                                        >
                                            {t("aiChallengeBriefPage.buttonText")}
                                        </button>
                                    </div>

                                    <div className="ai-brief-right">
                                        <div className="ai-brief-prompt-container">
                                            <div className="ai-brief-badge">
                                                {t("aiPrompt.suspiciousBadge")}
                                            </div>
                                            <div className="ai-brief-prompt-box">
                                                <p>
                                                    {t("aiPrompt.content")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ) : step === "game" ? (
                                <section className="ai-game-panel">
                                    <div className="ai-game-header">
                                        <h1>{t("aiGamePage.title")}</h1>
                                        <p>{t("aiGamePage.subtitle")}</p>
                                    </div>

                                    <div className="ai-game-content">
                                        <div className="ai-game-prompt-container">
                                            <div className="ai-game-prompt">
                                                <p className="ai-game-prompt-text">
                                                    {t("aiPrompt.content")}
                                                </p>
                                            </div>
                                            <div className="ai-game-badge">
                                                <span className="ai-game-badge-text">{t("aiPrompt.suspiciousBadge")}</span>
                                            </div>
                                        </div>

                                        <div className="ai-game-words-container">
                                            <div className={`ai-game-sentence ${isCompleted ? "completed" : ""}`}>
                                                {selectedWords.map((word, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="ai-game-selected-word-group"
                                                        style={isCompleted ? { "--word-index": idx } : undefined}
                                                    >
                                                        <span className="ai-game-selected-word">{word}</span>
                                                        <span className="ai-game-word-percentage">
                                                            {gameData[idx].percentage}
                                                        </span>
                                                    </div>
                                                ))}
                                                {!isCompleted && (
                                                    <div className="ai-game-options-column">
                                                        {optionsByStep[selectedWords.length].map((word) => (
                                                            <button
                                                                key={`${selectedWords.length}-${word}`}
                                                                className={`ai-game-word-button ${
                                                                    wrongChoice?.step === selectedWords.length &&
                                                                    wrongChoice?.word === word
                                                                        ? "wrong-word"
                                                                        : ""
                                                                }`}
                                                                onClick={() => handleWordClick(word)}
                                                            >
                                                                <span className="ai-game-word-text">{word}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {showMatch && (
                                                <div className="ai-game-match">
                                                    <p className="ai-game-match-label">COINCIDENCE WITH POST:</p>
                                                    <article className="ai-game-match-card">
                                                        <div className="ai-game-match-avatar" aria-hidden="true" />
                                                        <div className="ai-game-match-content">
                                                            <div className="ai-game-match-meta">
                                                                <strong>Critical Thinking 🍅🌶️🥑</strong>
                                                                <span>@quesofresco85</span>
                                                                <span>{t("aiVerifyPage.postDate")}</span>
                                                            </div>
                                                            <p>{reconstructedSentence}</p>
                                                            <span className="ai-game-match-tag">POST GENERATED WITH AI</span>
                                                        </div>
                                                    </article>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="ai-game-actions">
                                        {!isCompleted && (
                                            <button className="ai-verify-back" type="button" onClick={() => setStep("brief")}>
                                                {t("aiGamePage.back")}
                                            </button>
                                        )}
                                    </div>
                                </section>
                            ) : null}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
