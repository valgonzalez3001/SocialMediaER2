import React from "react";
import { Route, Routes } from "react-router-dom";

// import { RequiresAuth } from "../components/RequiresAuth";
import { Home } from "../pages/Home/Home";
import { Explore } from "../pages/Explore/Explore";
import { Profile } from "../pages/Profile/Profile";
import { PostDetail } from "../pages/PostDetail/PostDetail";
import { Admin } from "../pages/Admin/Admin";
import { Error } from "../pages/Error/Error";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/post-detail/:postId" element={<PostDetail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
