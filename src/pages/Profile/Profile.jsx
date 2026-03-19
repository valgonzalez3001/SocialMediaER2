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
  };

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
       </main>
      </div>
    </>
  );
};
