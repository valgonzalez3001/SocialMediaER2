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
import { XAPIProvider } from "./contexts/XAPIProvider.jsx";
import './i18n.jsx';
import i18n from './i18n.jsx';

// Call make Server with initial language
let initialLanguage = localStorage.getItem('i18nextLng') || 'en';
// Normalizar el idioma a solo las primeras 2 letras (por si viene como 'en-US')
initialLanguage = initialLanguage.split('-')[0].toLowerCase();
console.log('🌐 Idioma inicial detectado:', initialLanguage);
makeServer({ language: initialLanguage });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <XAPIProvider>
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
      </XAPIProvider>
    </Router>
  </React.StrictMode>
);
