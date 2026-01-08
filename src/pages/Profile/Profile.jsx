import "./Profile.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { usePosts } from "../../contexts/PostsProvider";
import { Post } from "../../components/Post/Post";
import { EditProfileModal } from "./components/EditProfileModal/EditProfileModal";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);

  const { allPosts, postLoading } = usePosts();
  const { username } = useParams();

  const postsByUser = allPosts?.filter((post) => post.username === username);

  return (
    <>
      <Header />
      <div className="app-container">
        <Navbar />

        <main className="feed">
          <UserInfo
            setIsEditProfile={setIsEditProfile}
            postsByUser={postsByUser}
          />
          <div className="user-posts-container">
            {!postLoading &&
              (postsByUser.length ? (
                postsByUser.map((post) => <Post key={post._id} post={post} />)
              ) : (
                <p className="no-bookmarks">You have not added any posts!</p>
              ))}
          </div>
          {isEditProfile && (
            <div className="create-post-modal">
              <EditProfileModal
                className="modal-content"
                setIsEditProfile={setIsEditProfile}
              />
            </div>
          )}
        </main>
      </div>
    </>
  );
};
