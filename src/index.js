import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { PostsProvider } from "./contexts/PostsProvider";
import { UserProvider } from "./contexts/UserProvider";
import { LoggedInUserProvider } from "./contexts/LoggedInUserProvider";
import './i18n'; // Importar configuración de i18n

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
