import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useStats } from "../contexts/StatsProvider";

// import { RequiresAuth } from "../components/RequiresAuth";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { PostDetail } from "../pages/PostDetail/PostDetail";
import { Admin } from "../pages/Admin/Admin";
import { AIContent } from "../pages/AIContent/AIContent";
import { AIIncorrectUses } from "../pages/AIIncorrectUses/AIIncorrectUses";
import { Error } from "../pages/Error/Error";

const ProtectedRoute = ({ children }) => {
  const { challenge1Completed } = useStats();
  
  if (!challenge1Completed) {
    return <Navigate to="/admin" replace />;
  }
  
  return children;
};

const Challenge2ProtectedRoute = ({ children }) => {
  const { challenge2Completed } = useStats();

  if (!challenge2Completed) {
    return <Navigate to="/ai-content" replace />;
  }

  return children;
};

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/post-detail/:postId" element={<PostDetail />} />
      <Route path="/admin" element={<Admin />} />
      <Route 
        path="/ai-content" 
        element={
          <ProtectedRoute>
            <AIContent />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/ai-incorrect-uses" 
        element={
          <ProtectedRoute>
            <Challenge2ProtectedRoute>
              <AIIncorrectUses />
            </Challenge2ProtectedRoute>
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
