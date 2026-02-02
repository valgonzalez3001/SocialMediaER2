import "./PostDetail.css";

import React from "react";
import { useParams } from "react-router-dom";

import { usePosts } from "../../contexts/PostsProvider.jsx";
import { Post } from "../../components/Post/Post";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const PostDetail = () => {
  const { postId } = useParams();
  const { allPosts, postLoading } = usePosts();

  const post = allPosts?.find((post) => post?.id === postId);
  return (
    <>
      <Header />
      <div className="app-container">
        <Navbar />

        <main className="feed">{!postLoading && <Post post={post} />}</main>
      </div>
    </>
  );
};
