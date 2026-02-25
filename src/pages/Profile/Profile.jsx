import "./Profile.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { usePosts } from "../../contexts/PostsProvider.jsx";
import { Post } from "../../components/Post/Post";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [fromAdmin, setFromAdmin] = useState(false);

  const { allPosts, postLoading } = usePosts();
  const { username } = useParams();

  const postsByUser = allPosts?.filter((post) => post.username === username);

  useEffect(() => {
    const cameFromAdmin = sessionStorage.getItem('fromAdmin');
    setFromAdmin(cameFromAdmin === 'true');
  }, []);

  const handleBackToGame = () => {
    sessionStorage.removeItem('fromAdmin');
    navigate('/admin');
  };

  return (
    <>
      <Header />
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
          />
          <div className="user-posts-container">
            {!postLoading &&
              (postsByUser.length ? (
                postsByUser.map((post) => <Post key={post._id} post={post} />)
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
