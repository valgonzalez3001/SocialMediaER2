import React from "react";
import { Route, Routes } from "react-router-dom";

// import { RequiresAuth } from "../components/RequiresAuth";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { PostDetail } from "../pages/PostDetail/PostDetail";
import { Admin } from "../pages/Admin/Admin";
import { AIContent } from "../pages/AIContent/AIContent";
import { AIIncorrectUses } from "../pages/AIIncorrectUses/AIIncorrectUses";
import { Error } from "../pages/Error/Error";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/post-detail/:postId" element={<PostDetail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/ai-content" element={<AIContent />} />
      <Route path="/ai-incorrect-uses" element={<AIIncorrectUses />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
