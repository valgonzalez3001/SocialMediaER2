import React from "react";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import "./Bookmark.css";
import { Post } from "../../components/Post/Post";
import { usePosts } from "../../contexts/PostsProvider";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const Bookmark = () => {
  const { allPosts, postLoading } = usePosts();

  const { loggedInUserState } = useLoggedInUser();

  const allBookmarkedPosts = allPosts?.filter((post) =>
    loggedInUserState?.bookmarks?.find((postId) => postId === post?._id)
  );
  return (
    <>
      <Header />
      <div className="app-container">
        <Navbar />

        <main className="feed bookmark-container">
          {!postLoading &&
            (allBookmarkedPosts.length ? (
              allBookmarkedPosts?.map((post) => (
                <Post post={post} key={post?._id} />
              ))
            ) : (
              <p className="no-bookmarks">You have not added any Bookmarks!</p>
            ))}
        </main>
      </div>
    </>
  );
};
