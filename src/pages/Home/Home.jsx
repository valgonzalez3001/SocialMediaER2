import "./Home.css";
import React from "react";
import { useState } from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

import { usePosts } from "../../contexts/PostsProvider.jsx";
import { Post } from "../../components/Post/Post";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";

export const Home = () => {
  const { t } = useTranslation();
  const { setSortBy, sortBy, allPosts, postLoading } = usePosts();
  const { loggedInUserState } = useLoggedInUser();


  // Mostrar todos los posts ya que no tenemos array following
  const allPostFromFollowers = allPosts || [];

  const sortedPosts = (sortBy, allPosts) => {
    if (sortBy === "Latest" || sortBy === t('home.sortBy.latest')) {
      const sortedPosts = allPosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sortedPosts;
    }
    if (sortBy === "Oldest" || sortBy === t('home.sortBy.oldest')) {
      const sortedPosts = allPosts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      return sortedPosts;
    } else {
      const sortedPosts = allPosts.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
      return sortedPosts;
    }
  };

  const [isAjustmentOn, setIsAdjustmentOn] = useState(false);
  const sortTypes = [
    { key: "Trending", label: t('home.sortBy.trending') },
    { key: "Oldest", label: t('home.sortBy.oldest') },
    { key: "Latest", label: t('home.sortBy.latest') }
  ];

  // Obtener la etiqueta traducida del tipo de orden actual
  const getCurrentSortLabel = () => {
    const currentSort = sortTypes.find(type => type.key === sortBy);
    return currentSort ? currentSort.label : sortBy;
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Navbar />

        <main className="feed">
          <CreatePostForm />

          <div className="sorting-container">
            <p>{getCurrentSortLabel()} {t('home.sortBy.posts')}</p>
            <TbAdjustmentsHorizontal
              onClick={() => setIsAdjustmentOn(!isAjustmentOn)}
              className="adjustment-btn"
            />
            {isAjustmentOn && (
              <div className="dropdown-list-container">
                <ul>
                  {sortTypes.map((type) => (
                    <AttentionSeeker
                      key={type.key}
                      duration={1000}
                      effect="headShake"
                    >
                      <li
                        className={type.key === sortBy ? "isActive" : ""}
                        onClick={() => {
                          setSortBy(type.key);
                          setIsAdjustmentOn(!isAjustmentOn);
                        }}
                        key={type.key}
                      >
                        {type.label}
                      </li>{" "}
                    </AttentionSeeker>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {!postLoading && (
            <div className="post-listing-container">
              {sortedPosts(sortBy, allPostFromFollowers).length ? (
                sortedPosts(sortBy, allPostFromFollowers)?.map((post) => {
                  return <Post key={post?._id} post={post} />;
                })
              ) : (
                <p className="no-bookmarks">
                  {t('home.noPosts')}
                </p>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
};
