import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Contexto para gestionar las estadisticas del sistema
 */
const StatsContext = createContext();

export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error("useStats debe usarse dentro de StatsProvider");
  }
  return context;
};

export const StatsProvider = ({ children }) => {
  const getInitialStats = () => ({
    misinformation: {
      level: 78,
      trend: "up",
    },
    postsLastHour: {
      count: 324,
      percentage: 85,
      normal: 50,
    },
    newUsersLastHour: {
      count: 156,
      percentage: 92,
      normal: 20,
    },
    trendingHashtags: [
      { tag: "#GlowUp", count: 234, suspicious: true },
      { tag: "#MiracleCure", count: 189, suspicious: true },
      { tag: "#EnergyBoost", count: 145, suspicious: true },
    ],
    botActivity: {
      percentage: 73,
      detected: 45,
    },
    engagement: {
      likes: 65,
      comments: 42,
      shares: 38,
    },
    accountAge: {
      newAccounts: 68,
      suspicious: true,
    },
  });

  const [stats, setStats] = useState(getInitialStats());

  const [challenge1Completed, setChallenge1Completed] = useState(() => {
    const saved = sessionStorage.getItem("challenge1Completed");
    return saved ? JSON.parse(saved) : false;
  });

  const [challenge2Completed, setChallenge2Completed] = useState(() => {
    const saved = sessionStorage.getItem("challenge2Completed");
    return saved ? JSON.parse(saved) : false;
  });

  const [challenge3Completed, setChallenge3Completed] = useState(() => {
    const saved = sessionStorage.getItem("challenge3Completed");
    return saved ? JSON.parse(saved) : false;
  });

  const [challengeFinalCompleted, setChallengeFinalCompleted] = useState(() => {
    const saved = sessionStorage.getItem("challengeFinalCompleted");
    return saved ? JSON.parse(saved) : false;
  });

  // Estados para rastrear la lectura de mensajes de instrucciones
  const [challenge2InstructionsRead, setChallenge2InstructionsRead] = useState(() => {
    const saved = sessionStorage.getItem("challenge2InstructionsRead");
    return saved ? JSON.parse(saved) : false;
  });

  const [challenge3InstructionsRead, setChallenge3InstructionsRead] = useState(() => {
    const saved = sessionStorage.getItem("challenge3InstructionsRead");
    return saved ? JSON.parse(saved) : false;
  });

  const [challengeFinalInstructionsRead, setChallengeFinalInstructionsRead] = useState(() => {
    const saved = sessionStorage.getItem("challengeFinalInstructionsRead");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const savedChallenge1 = sessionStorage.getItem("challenge1Completed");
    const savedChallenge2 = sessionStorage.getItem("challenge2Completed");
    const savedChallenge3 = sessionStorage.getItem("challenge3Completed");
    const savedChallengeFinal = sessionStorage.getItem("challengeFinalCompleted");
    const savedChallenge2Instructions = sessionStorage.getItem("challenge2InstructionsRead");
    const savedChallenge3Instructions = sessionStorage.getItem("challenge3InstructionsRead");
    const savedChallengeFinalInstructions = sessionStorage.getItem("challengeFinalInstructionsRead");

    if (savedChallenge1) {
      setChallenge1Completed(JSON.parse(savedChallenge1));
    }
    if (savedChallenge2) {
      setChallenge2Completed(JSON.parse(savedChallenge2));
    }
    if (savedChallenge3) {
      setChallenge3Completed(JSON.parse(savedChallenge3));
    }
    if (savedChallengeFinal) {
      setChallengeFinalCompleted(JSON.parse(savedChallengeFinal));
    }
    if (savedChallenge2Instructions) {
      setChallenge2InstructionsRead(JSON.parse(savedChallenge2Instructions));
    }
    if (savedChallenge3Instructions) {
      setChallenge3InstructionsRead(JSON.parse(savedChallenge3Instructions));
    }
    if (savedChallengeFinalInstructions) {
      setChallengeFinalInstructionsRead(JSON.parse(savedChallengeFinalInstructions));
    }
  }, []);

  const updateStats = (newStats) => {
    setStats((prev) => ({
      ...prev,
      ...newStats,
    }));
  };

  const reduceMisinformation = (percentage = 30) => {
    setStats((prev) => ({
      ...prev,
      misinformation: {
        ...prev.misinformation,
        level: Math.max(0, prev.misinformation.level - percentage),
        trend: "down",
      },
      postsLastHour: {
        ...prev.postsLastHour,
        percentage: Math.max(0, prev.postsLastHour.percentage - 15),
      },
      newUsersLastHour: {
        ...prev.newUsersLastHour,
        percentage: Math.max(0, prev.newUsersLastHour.percentage - 20),
      },
      botActivity: {
        ...prev.botActivity,
        percentage: Math.max(0, prev.botActivity.percentage - 25),
      },
      accountAge: {
        ...prev.accountAge,
        newAccounts: Math.max(0, prev.accountAge.newAccounts - 15),
        suspicious: Math.max(0, prev.accountAge.newAccounts - 15) > 40,
      },
    }));
  };

  const completeChallenge1 = () => {
    setChallenge1Completed(true);
    sessionStorage.setItem("challenge1Completed", JSON.stringify(true));
  };

  const completeChallenge2 = () => {
    setChallenge2Completed(true);
    sessionStorage.setItem("challenge2Completed", JSON.stringify(true));
  };

  const completeChallenge3 = () => {
    setChallenge3Completed(true);
    sessionStorage.setItem("challenge3Completed", JSON.stringify(true));
  };

  const completeChallengeFinal = () => {
    reduceMisinformation(78);
    setChallengeFinalCompleted(true);
    sessionStorage.setItem("challengeFinalCompleted", JSON.stringify(true));
  };

  const markChallenge2InstructionsRead = () => {
    setChallenge2InstructionsRead(true);
    sessionStorage.setItem("challenge2InstructionsRead", JSON.stringify(true));
  };

  const markChallenge3InstructionsRead = () => {
    setChallenge3InstructionsRead(true);
    sessionStorage.setItem("challenge3InstructionsRead", JSON.stringify(true));
  };

  const markChallengeFinalInstructionsRead = () => {
    setChallengeFinalInstructionsRead(true);
    sessionStorage.setItem("challengeFinalInstructionsRead", JSON.stringify(true));
  };

  const value = {
    stats,
    updateStats,
    reduceMisinformation,
    challenge1Completed,
    completeChallenge1,
    challenge2Completed,
    completeChallenge2,
    challenge3Completed,
    completeChallenge3,
    challengeFinalCompleted,
    completeChallengeFinal,
    challenge2InstructionsRead,
    markChallenge2InstructionsRead,
    challenge3InstructionsRead,
    markChallenge3InstructionsRead,
    challengeFinalInstructionsRead,
    markChallengeFinalInstructionsRead,
  };

  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
};
