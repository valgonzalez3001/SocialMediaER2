import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { makeServer } from "./server.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { PostsProvider } from "./contexts/PostsProvider.jsx";
import { UserProvider } from "./contexts/UserProvider.jsx";
import { LoggedInUserProvider } from "./contexts/LoggedInUserProvider.jsx";
import './i18n.jsx'; 

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <LoggedInUserProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </LoggedInUserProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
