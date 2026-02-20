import "./AIIncorrectUses.css";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";

import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { useUser } from "../../contexts/UserProvider.jsx";
import { useStats } from "../../contexts/StatsProvider.jsx";
import { useMessages } from "../../contexts/MessagesProvider.jsx";
import challengeData from "./AIIncorrectUses.json";

export const AIIncorrectUses = () => {
    const { t } = useTranslation();
    const currentLang = t("langKey");
    const { userState } = useUser();
    const { challenge3Completed, completeChallenge3 } = useStats();
    const { addMessage } = useMessages();
    const [activeCaseId, setActiveCaseId] = useState(null);
    const [selectedWrongOption, setSelectedWrongOption] = useState({});
    const [wrongSelections, setWrongSelections] = useState({});
    const [correctSelected, setCorrectSelected] = useState({});
    const [sentReplies, setSentReplies] = useState({});
    const challengeCases = useMemo(
        () => challengeData[currentLang] || challengeData.en || [],
        [currentLang]
    );
    
    useEffect(() => {
        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        document.body.classList.add("ai-incorrect-no-scroll");
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.classList.remove("ai-incorrect-no-scroll");
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
        };
    }, []);

    // Detectar cuando se completan todos los casos
    useEffect(() => {
        const totalCases = challengeCases.length;
        const completedCases = Object.keys(sentReplies).length;
        
        if (completedCases === totalCases && !challenge3Completed) {
            const instructionsSent = sessionStorage.getItem("challengeFinalInstructionsSent");
            if (instructionsSent) return;

            completeChallenge3();
            sessionStorage.setItem("challengeFinalInstructionsSent", JSON.stringify(true));
            
            addMessage({
                fromKey: "messagesApp.messages.challengeFinal.from",
                subjectKey: "messagesApp.messages.challengeFinal.subject",
                contentKey: "messagesApp.messages.challengeFinal.content",
            });

            toast(() => (
                <div>
                    <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                        {t("messagesApp.newMessageNotification")}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
                        {t("messagesApp.challengeFinalNotification")}
                    </p>
                </div>
            ), {
                duration: 4000,
                icon: "📬",
            });
        }
    }, [sentReplies, challengeCases.length, challenge3Completed, completeChallenge3, addMessage, t]);

    const activeCase = challengeCases.find((item) => item.id === activeCaseId) || null;
    const activeWrongSelections = activeCaseId ? (wrongSelections[activeCaseId] || {}) : {};
    const isResolved = activeCaseId ? Boolean(correctSelected[activeCaseId]) : false;
    const canSendReply = activeCaseId ? Boolean(correctSelected[activeCaseId]) : false;

    const echoOfficialUser = {
        _id: "echo-official",
        firstName: t("officialAccount.name") || "ECHO Official Account",
        lastName: "",
        username: "ECHO",
        avatarURL: "/assets/echo.png"
    }
        userState?.allUsers?.find((user) => user.username === "ECHO") || userState?.allUsers?.[0];

    const handleOptionClick = (optionIndex) => {
        if (!activeCase || isResolved) return;

        const option = activeCase.options[optionIndex] || null;
        if (!option) return;

        if (option.isCorrect) {
            setCorrectSelected((prev) => ({ ...prev, [activeCase.id]: true }));
            setSelectedWrongOption((prev) => ({ ...prev, [activeCase.id]: null }));
            return;
        }

        setWrongSelections((prev) => ({
            ...prev,
            [activeCase.id]: {
                ...(prev[activeCase.id] || {}),
                [optionIndex]: true,
            },
        }));
        setSelectedWrongOption((prev) => ({ ...prev, [activeCase.id]: optionIndex }));
    };

    const handleSendReply = () => {
        if (!activeCase || !canSendReply) return;
        setSentReplies((prev) => ({ ...prev, [activeCase.id]: true }));
        setActiveCaseId(null);
    };

   

    return (
        <>
            <Header />
            <div className="app-container ai-incorrect-app">
                <Navbar />

                <main className="feed ai-incorrect-feed">
                    <div className="ai-incorrect-uses-page">
                        <section className="ai-incorrect-panel">
                            <header className="ai-incorrect-header">
                                <h1>{t("aiIncorrectUsesPage.title")}</h1>
                                <p>{t("aiIncorrectUsesPage.subtitle")}</p>
                            </header>
                            <p className="ai-incorrect-instruction">{t("aiIncorrectUsesPage.instruction")}</p>

                            <div className="ai-incorrect-list">
                                {challengeCases.map((item) => (
                                    <article key={item.id} className="ai-incorrect-post-card list-item">
                                        <div className="x-avatar">
                                            <img src={item.post?.image || echoOfficialUser?.avatarURL} alt={item.post.name} />
                                        </div>
                                        <div className="x-post-main">
                                            <div className="ai-incorrect-post-meta">
                                                <span className="ai-incorrect-post-name">{item.post.name}</span>
                                                <span className="ai-incorrect-post-handle">{item.post.handle}</span>
                                                <span className="ai-incorrect-post-handle">{item.post.date}</span>
                                            </div>
                                            <p className="ai-incorrect-post-text">{item.post.text}</p>
                                            {sentReplies[item.id] && (
                                                <div className="thread-reply-card">
                                                    <div className="x-avatar reply-avatar">
                                                        <img
                                                            src={ echoOfficialUser?.avatarURL}
                                                            alt={ "ECHO"}
                                                        />
                                                    </div>
                                                    <div className="x-post-main">
                                                        <div className="ai-incorrect-post-meta">
                                                            <span className="ai-incorrect-post-name">
                                                                {t("officialAccount.name") || "ECHO Official Account"}
                                                            </span>
                                                            <span className="ai-incorrect-post-handle">
                                                                {t("officialAccount.handle") || "@ECHO"}
                                                            </span>
                                                        </div>
                                                        <p className="ai-incorrect-post-text">
                                                            {item.options.find((opt) => opt.isCorrect)?.text || ""}
                                                        </p>
                                                        <p className="ai-incorrect-sent">{t("aiIncorrectUsesPage.sent")}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            className="reply-open-btn"
                                            onClick={() => {
                                                setActiveCaseId(item.id);
                                                setSelectedWrongOption((prev) => ({ ...prev, [item.id]: null }));
                                            }}
                                        >
                                            Reply
                                        </button>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            {activeCase && (
                <div className="reply-modal-backdrop" onClick={() => setActiveCaseId(null)}>
                    <div className="reply-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="reply-modal-close" type="button" onClick={() => setActiveCaseId(null)}>
                            ×
                        </button>

                        <article className="ai-incorrect-post-card x-post modal-top-post">
                            <div className="x-avatar">
                                <img src={activeCase.post?.image || echoOfficialUser?.avatarURL} alt={activeCase.post.name} />
                            </div>
                            <div className="x-post-main">
                                <div className="ai-incorrect-post-meta">
                                    <span className="ai-incorrect-post-name">{activeCase.post.name}</span>
                                    <span className="ai-incorrect-post-handle">{activeCase.post.handle}</span>
                                    <span className="ai-incorrect-post-handle">{activeCase.post.date}</span>
                                </div>
                                <p className="ai-incorrect-post-text">{activeCase.post.text}</p>
                            </div>
                        </article>

                        <div className="x-reply-section modal-reply">
                            <div className="x-avatar moderator">
                                <img
                                    src={activeCase.officialPost?.image || echoOfficialUser?.avatarURL}
                                    alt={echoOfficialUser?.firstName || "ECHO"}
                                />
                            </div>
                            <div className="x-reply-main">
                                <div className="ai-incorrect-reply-meta">
                                    <strong>
                                        {activeCase.officialPost?.name ||
                                            `${echoOfficialUser?.firstName || ""} ${echoOfficialUser?.lastName || ""}`.trim()}
                                    </strong>&nbsp;&nbsp;
                                    <span>
                                        {activeCase.officialPost?.handle ||
                                            `@${echoOfficialUser?.username || "ECHO"}`}
                                    </span>&nbsp;&nbsp;
                                    <span className="ai-incorrect-post-handle">{activeCase.post.date}</span>
                                </div>
                                <p className="x-reply-helper">{t("aiIncorrectUsesPage.instruction")}</p>

                                <div className="ai-incorrect-options">
                                    {activeCase.options.map((option, index) => (
                                        <button
                                            key={`${activeCase.id}-${index}`}
                                            className={`ai-incorrect-option ${
                                                selectedWrongOption[activeCase.id] === index ? "wrong-selection" : ""
                                            } ${option.isCorrect && correctSelected[activeCase.id] ? "correct-selection" : ""} ${
                                                activeWrongSelections[index] ? "persist-wrong" : ""
                                            }`}
                                            onClick={() => handleOptionClick(index)}
                                            type="button"
                                        >
                                            {option.text}
                                        </button>
                                    ))}
                                </div>

                                <div className="reply-status-line">
                                    {!canSendReply && selectedWrongOption[activeCase.id] !== null && (
                                        <span className="reply-try-again">{t("aiIncorrectUsesPage.tryAgain")}</span>
                                    )}
                                    {canSendReply && (
                                        <span className="reply-correct">{t("aiIncorrectUsesPage.correct")}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="reply-modal-actions">
                            <button type="button" className="reply-send-btn" disabled={!canSendReply} onClick={handleSendReply}>
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
