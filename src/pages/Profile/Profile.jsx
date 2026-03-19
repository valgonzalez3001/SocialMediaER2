import "./Profile.css";
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { usePosts } from "../../contexts/PostsProvider.jsx";
import { Post } from "../../components/Post/Post";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { useXAPI, XAPI_VERBS, ECHO_ACTIVITIES } from "../../contexts/XAPIProvider.jsx";
import { useUser } from "../../contexts/UserProvider.jsx";

export const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [fromAdmin, setFromAdmin] = useState(false);
  const [classificationFeedback, setClassificationFeedback] = useState(null);
  const [showClassificationQuiz, setShowClassificationQuiz] = useState(false);
  const [quizSubmittedByUser, setQuizSubmittedByUser] = useState({});
  const [selectedQuizOptions, setSelectedQuizOptions] = useState([]);
  const [classifiedUsers, setClassifiedUsers] = useState(() => {
    const saved = sessionStorage.getItem('adminGameState');
    return saved ? JSON.parse(saved) : {};
  });
  const { sendStatement } = useXAPI();
  const lookedAtSentRef = useRef(new Set());
  const { userState } = useUser();

  const { allPosts, postLoading } = usePosts();
  const { username } = useParams();

  useEffect(() => {
    if (lookedAtSentRef.current.has(username)) return;
    lookedAtSentRef.current.add(username);
    sendStatement(
      XAPI_VERBS.LOOKED_AT,
      {
        id: `${ECHO_ACTIVITIES.PROFILE.id}/${username}`,
        definition: {
          name: { en: `Account: ${username}` },
          type: "http://adlnet.gov/expapi/activities/profile",
        },
      },
      null,
      {
        contextActivities: {
          grouping: [ECHO_ACTIVITIES.GAME],
        },
      }
    );
  }, [username]);

  const postsByUser = allPosts?.filter((post) => post.username === username);
  const currentUser = userState?.allUsers?.find((u) => u.username === username);
  const suspectUsernames = (() => {
    const raw = sessionStorage.getItem('adminGameUsernames');
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  })();
  const isSuspectUser = Boolean(currentUser) && suspectUsernames.includes(username);

  const sortedPostsByUser = postsByUser ? [
    ...postsByUser.filter((p) => p.isCommunityNote),
    ...postsByUser.filter((p) => !p.isCommunityNote).sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ),
  ] : [];

  const isClassificationLocked = (() => {
    if (!currentUser) return false;
    const currentClassification = classifiedUsers[username];
    if (!currentClassification) return false;
    const isBot = currentUser?.puzzle?.isBot;
    return (currentClassification === 'AI' && isBot) || (currentClassification === 'Humano' && !isBot);
  })();

  useEffect(() => {
    const cameFromAdmin = sessionStorage.getItem('fromAdmin');
    setFromAdmin(cameFromAdmin === 'true');
  }, []);

  const handleBackToGame = () => {
    sessionStorage.removeItem('fromAdmin');
    navigate('/admin');
  };

  const handleClassification = (classification) => {
    if (!currentUser) return;
    if (isClassificationLocked) return;

    const isBot = currentUser?.puzzle?.isBot;
    const isCorrect = (classification === 'AI' && isBot) || (classification === 'Humano' && !isBot);

    sendStatement(
      XAPI_VERBS.ANSWERED,
      {
        id: `${ECHO_ACTIVITIES.PUZZLE_1.id}/account/${currentUser?.username}`,
        definition: {
          name: { en: `Account Classification: ${currentUser?.username}` },
          type: "http://adlnet.gov/expapi/activities/cmi.interaction",
          interactionType: "choice",
          choices: [
            { id: "bot", description: { en: "Bot" } },
            { id: "human", description: { en: "Human" } },
          ],
          correctResponsesPattern: [isBot ? "bot" : "human"],
        },
      },
      {
        success: isCorrect,
        score: { scaled: isCorrect ? 1 : 0, raw: isCorrect ? 1 : 0, min: 0, max: 1 },
        response: classification === 'AI' ? "bot" : "human",
      },
      {
        contextActivities: {
          parent: [ECHO_ACTIVITIES.PUZZLE_1],
          grouping: [ECHO_ACTIVITIES.GAME],
        },
      }
    );

    setClassifiedUsers((prev) => {
      const newState = { ...prev, [currentUser.username]: classification };
      sessionStorage.setItem('adminGameState', JSON.stringify(newState));
      return newState;
    });

    if (!isCorrect) {
      setClassificationFeedback('incorrect');
      setShowClassificationQuiz(false);
      return;
    }

    setClassificationFeedback('correct');
    const shouldRequireQuiz = classification === 'AI';
    if (shouldRequireQuiz && !quizSubmittedByUser[currentUser.username]) {
      setShowClassificationQuiz(true);
      return;
    }

    setShowClassificationQuiz(false);
  };

  const toggleQuizOption = (optionIndex) => {
    setSelectedQuizOptions((prev) => {
      if (prev.includes(optionIndex)) {
        return prev.filter((id) => id !== optionIndex);
      }
      return [...prev, optionIndex];
    });
  };

  const handleSubmitQuiz = () => {
    if (!currentUser) return;
    setQuizSubmittedByUser((prev) => ({ ...prev, [currentUser.username]: true }));
    setShowClassificationQuiz(false);
  };

  const shouldRequireQuizForCurrentProfile = classifiedUsers[username] === 'AI';

  const canOpenQuiz =
    classificationFeedback === 'correct' &&
    shouldRequireQuizForCurrentProfile &&
    currentUser &&
    !quizSubmittedByUser[currentUser.username];

  return (
    <>

      <div className="app-container">
        <Navbar />

        <main className="feed profile-feed">
          {fromAdmin && (
            <div className="back-to-game-container">
              <button className="back-to-game-button" onClick={handleBackToGame}>
                ← {t('profile.backToGame')}
              </button>
            </div>
          )}
          <UserInfo
            username={username}
            postsByUser={postsByUser}
            showClassificationControls={fromAdmin && isSuspectUser && username !== 'ECHO'}
            selectedClassification={classifiedUsers[username]}
            onClassify={handleClassification}
            isClassificationLocked={isClassificationLocked}
            classificationFeedback={classificationFeedback}
            canOpenClassificationQuiz={canOpenQuiz}
            onOpenClassificationQuiz={() => setShowClassificationQuiz(true)}
          />
          <div className="user-posts-container">
            {!postLoading &&
              (sortedPostsByUser.length ? (
                sortedPostsByUser.map((post) => <Post key={post._id} post={post} />)
              ) : (<>
                <p className="no-bookmarks">{t('profile.noPosts')}</p>   
       </>
              ))}
          </div>

          {showClassificationQuiz && (
            <div className="classification-quiz-overlay" onClick={() => setShowClassificationQuiz(false)}>
              <div className="classification-quiz-modal" onClick={(e) => e.stopPropagation()}>
                <button
                  className="classification-quiz-close"
                  type="button"
                  onClick={() => setShowClassificationQuiz(false)}
                  aria-label={t('profile.closeQuiz')}
                >
                  ×
                </button>
                <h3 className="classification-quiz-title">{t('profile.classificationQuizTitle')}</h3>

                <div className="classification-quiz-options">
                  {[1, 2, 3, 4, 5].map((option) => (
                    <label key={option} className="classification-quiz-option">
                      <input
                        type="checkbox"
                        checked={selectedQuizOptions.includes(option)}
                        onChange={() => toggleQuizOption(option)}
                      />
                      <span className="classification-quiz-option-placeholder" aria-hidden="true" />
                    </label>
                  ))}
                </div>

                <button
                  type="button"
                  className="classification-quiz-submit"
                  onClick={handleSubmitQuiz}
                >
                  {t('profile.sendQuizAnswer')}
                </button>
              </div>
            </div>
          )}
       </main>
      </div>
    </>
  );
};
