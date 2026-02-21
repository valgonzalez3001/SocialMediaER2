import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const XAPIContext = createContext();

// xAPI LRS configuration from environment variables
const XAPI_ENDPOINT = import.meta.env.VITE_XAPI_ENDPOINT;
const XAPI_KEY = import.meta.env.VITE_XAPI_KEY;
const XAPI_SECRET = import.meta.env.VITE_XAPI_SECRET;

// Base IRIs for ENDGAME project
const ENDGAME_BASE = "https://endgameproject.github.io/xapi";
const RWTH_VERBS = "https://xapi.elearn.rwth-aachen.de/definitions/ide/verbs";
const RWTH_ACTIVITIES = "https://xapi.elearn.rwth-aachen.de/definitions/seriousGames/activities";

// Common xAPI verbs
export const XAPI_VERBS = {
  STARTED: {
    id: `${RWTH_VERBS}/started`,
    display: { en: "started" },
  },
  INITIALIZED: {
    id: "http://adlnet.gov/expapi/verbs/initialized",
    display: { en: "initialized" },
  },
  COMPLETED: {
    id: "http://adlnet.gov/expapi/verbs/completed",
    display: { en: "completed" },
  },
  ANSWERED: {
    id: "http://adlnet.gov/expapi/verbs/answered",
    display: { en: "answered" },
  },
  EXPERIENCED: {
    id: "http://adlnet.gov/expapi/verbs/experienced",
    display: { en: "experienced" },
  },
  ATTEMPTED: {
    id: "http://adlnet.gov/expapi/verbs/attempted",
    display: { en: "attempted" },
  },
  PASSED: {
    id: "http://adlnet.gov/expapi/verbs/passed",
    display: { en: "passed" },
  },
  FAILED: {
    id: "http://adlnet.gov/expapi/verbs/failed",
    display: { en: "failed" },
  },
  INTERACTED: {
    id: "http://adlnet.gov/expapi/verbs/interacted",
    display: { en: "interacted" },
  },
  LAUNCHED: {
    id: "http://adlnet.gov/expapi/verbs/launched",
    display: { en: "launched" },
  },
  PROGRESSED: {
    id: "http://adlnet.gov/expapi/verbs/progressed",
    display: { en: "progressed" },
  },
};

// Activity types
export const XAPI_ACTIVITY_TYPES = {
  GAME: `${RWTH_ACTIVITIES}/game`,
  LEVEL: `${RWTH_ACTIVITIES}/level`,
  PUZZLE: "http://adlnet.gov/expapi/activities/assessment",
};

// ENDGAME ECHO escape room activities
export const ECHO_ACTIVITIES = {
  GAME: {
    id: `${ENDGAME_BASE}/escape-rooms/echo`,
    definition: {
      name: { en: "ECHO" },
      type: XAPI_ACTIVITY_TYPES.GAME,
    },
  },
  INTRO: {
    id: `${ENDGAME_BASE}/escape-rooms/echo/intro`,
    definition: {
      name: { en: "Intro" },
      type: XAPI_ACTIVITY_TYPES.LEVEL,
    },
  },
  PUZZLE_1: {
    id: `${ENDGAME_BASE}/escape-rooms/echo/puzzle-1`,
    definition: {
      name: { en: "Puzzle 1 - Bot Detection" },
      type: XAPI_ACTIVITY_TYPES.PUZZLE,
    },
  },
  PUZZLE_2: {
    id: `${ENDGAME_BASE}/escape-rooms/echo/puzzle-2`,
    definition: {
      name: { en: "Puzzle 2 - AI Content" },
      type: XAPI_ACTIVITY_TYPES.PUZZLE,
    },
  },
  PUZZLE_3: {
    id: `${ENDGAME_BASE}/escape-rooms/echo/puzzle-3`,
    definition: {
      name: { en: "Puzzle 3 - AI Incorrect Uses" },
      type: XAPI_ACTIVITY_TYPES.PUZZLE,
    },
  },
  FINAL: {
    id: `${ENDGAME_BASE}/escape-rooms/echo/final`,
    definition: {
      name: { en: "Final Puzzle" },
      type: XAPI_ACTIVITY_TYPES.PUZZLE,
    },
  },
};

// Extension URIs
export const XAPI_EXTENSIONS = {
  PLAYER_AGE: `${ENDGAME_BASE}/ext/playerAge`,
  LANG: `${ENDGAME_BASE}/ext/lang`,
};

export const XAPIProvider = ({ children }) => {
  const [actor, setActor] = useState(null);
  const [isConfigured, setIsConfigured] = useState(false);

  const isDev = import.meta.env.DEV;

  // Check if xAPI is properly configured
  useEffect(() => {
    const configured = !!(XAPI_ENDPOINT && XAPI_KEY && XAPI_SECRET);
    setIsConfigured(configured);
    if (!configured && isDev) {
      console.warn("xAPI is not fully configured. Check VITE_XAPI_ENDPOINT, VITE_XAPI_KEY, and VITE_XAPI_SECRET in .env");
    }
  }, [isDev]);

  // Initialize actor from player data (called after onboarding)
  const initializeActor = useCallback((playerData) => {
    if (!playerData) return;

    const { name, age, language } = playerData;

    // Create a unique identifier for the actor
    const uniqueId = `${name.toLowerCase().replace(/\s+/g, "_")}_${Date.now()}`;

    const newActor = {
      objectType: "Agent",
      name: name,
      account: {
        homePage: ENDGAME_BASE,
        name: uniqueId,
      },
    };

    // Store actor extensions for additional context
    newActor.extensions = {
      [`${ENDGAME_BASE}/extensions/age`]: age,
      [`${ENDGAME_BASE}/extensions/language`]: language,
    };

    setActor(newActor);

    // Persist actor to sessionStorage
    sessionStorage.setItem("xapiActor", JSON.stringify(newActor));

    return newActor;
  }, []);

  // Restore actor from sessionStorage on mount
  useEffect(() => {
    const storedActor = sessionStorage.getItem("xapiActor");
    if (storedActor) {
      try {
        setActor(JSON.parse(storedActor));
      } catch (e) {
        if (isDev) console.error("[xAPI] Failed to parse stored actor:", e);
      }
    }
  }, [isDev]);

  // Send xAPI statement to LRS (non-blocking, fails silently in production)
  // actorOverride can be passed when calling immediately after initializeActor (before state updates)
  const sendStatement = useCallback(async (verb, object, result = null, context = null, actorOverride = null) => {
    const currentActor = actorOverride || actor;

    // Early return without interrupting the game
    if (!isConfigured) {
      if (isDev) console.warn("[xAPI] Not configured, statement not sent:", verb?.display?.en || verb);
      return null;
    }

    if (!currentActor) {
      if (isDev) console.warn("[xAPI] Actor not initialized, statement not sent");
      return null;
    }

    // Build the statement
    const statement = {
      actor: {
        objectType: currentActor.objectType,
        name: currentActor.name,
        account: currentActor.account,
      },
      verb: verb,
      object: {
        objectType: "Activity",
        id: typeof object === "string" ? `${ENDGAME_BASE}/activities/${object}` : object.id,
        definition: typeof object === "string"
          ? { name: { en: object } }
          : object.definition,
      },
      timestamp: new Date().toISOString(),
    };

    // Add result if provided
    if (result) {
      statement.result = result;
    }

    // Add context if provided
    if (context) {
      statement.context = context;
    }

    // Add actor extensions as context
    if (currentActor.extensions) {
      statement.context = {
        ...statement.context,
        extensions: {
          ...(statement.context?.extensions || {}),
          ...currentActor.extensions,
        },
      };
    }

    // Send asynchronously without blocking
    try {
      if (isDev) console.log("[xAPI] Sending statement:", verb?.display?.en || verb, object?.id || object);

      const response = await fetch(`${XAPI_ENDPOINT}/statements`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${btoa(`${XAPI_KEY}:${XAPI_SECRET}`)}`,
          "X-Experience-API-Version": "1.0.3",
        },
        body: JSON.stringify(statement),
      });

      if (!response.ok) {
        throw new Error(`xAPI request failed: ${response.status} ${response.statusText}`);
      }

      const statementId = await response.json();
      if (isDev) console.log("[xAPI] Statement sent successfully:", statementId);
      return statementId;
    } catch (error) {
      // Log error only in dev mode, never interrupt the game
      if (isDev) console.error("[xAPI] Failed to send statement:", error.message);
      return null;
    }
  }, [actor, isConfigured, isDev]);

  // Helper functions for common statements
  const trackChallengeStarted = useCallback((puzzleId, puzzleName) => {
    return sendStatement(
      XAPI_VERBS.INITIALIZED,
      {
        id: `${ENDGAME_BASE}/activities/puzzle/${puzzleId}`,
        definition: {
          name: { "en-US": puzzleName },
          type: "http://adlnet.gov/expapi/activities/assessment",
        },
      }
    );
  }, [sendStatement]);

  const trackChallengeCompleted = useCallback((puzzleId, puzzleName, success = true, score = null) => {
    const result = { success };
    if (score !== null) {
      result.score = { scaled: score };
    }

    return sendStatement(
      success ? XAPI_VERBS.PASSED : XAPI_VERBS.FAILED,
      {
        id: `${ENDGAME_BASE}/activities/puzzle/${puzzleId}`,
        definition: {
          name: { "en-US": puzzleName },
          type: "http://adlnet.gov/expapi/activities/assessment",
        },
      },
      result
    );
  }, [sendStatement]);

  const trackInteraction = useCallback((activityId, activityName, response = null) => {
    const result = response ? { response } : null;

    return sendStatement(
      XAPI_VERBS.INTERACTED,
      {
        id: `${ENDGAME_BASE}/activities/${activityId}`,
        definition: {
          name: { "en-US": activityName },
          type: "http://adlnet.gov/expapi/activities/interaction",
        },
      },
      result
    );
  }, [sendStatement]);

  const trackProgress = useCallback((activityId, activityName, progressPercent) => {
    return sendStatement(
      XAPI_VERBS.PROGRESSED,
      {
        id: `${ENDGAME_BASE}/activities/${activityId}`,
        definition: {
          name: { "en-US": activityName },
        },
      },
      {
        extensions: {
          [`${ENDGAME_BASE}/extensions/progress`]: progressPercent,
        },
      }
    );
  }, [sendStatement]);

  const value = {
    actor,
    isConfigured,
    initializeActor,
    sendStatement,
    trackChallengeStarted,
    trackChallengeCompleted,
    trackInteraction,
    trackProgress,
    XAPI_VERBS,
  };

  return (
    <XAPIContext.Provider value={value}>
      {children}
    </XAPIContext.Provider>
  );
};

export const useXAPI = () => {
  const context = useContext(XAPIContext);
  if (!context) {
    throw new Error("useXAPI must be used within an XAPIProvider");
  }
  return context;
};

export default XAPIProvider;
