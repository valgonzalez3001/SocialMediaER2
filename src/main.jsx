import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { makeServer } from "./server.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { PostsProvider } from "./contexts/PostsProvider.jsx";
import { UserProvider } from "./contexts/UserProvider.jsx";
import { LoggedInUserProvider } from "./contexts/LoggedInUserProvider.jsx";
import { OSProvider } from "./contexts/OSProvider.jsx";
import { MessagesProvider } from "./contexts/MessagesProvider.jsx";
import { StatsProvider } from "./contexts/StatsProvider.jsx";
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
            <StatsProvider>
              <OSProvider>
                <MessagesProvider>
                  <App />
                </MessagesProvider>
              </OSProvider>
            </StatsProvider>
          </PostsProvider>
        </LoggedInUserProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
