import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Contexto para gestionar las estadísticas del sistema
 * Proporciona datos sobre actividad sospechosa, posts, usuarios, hashtags, etc.
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
  // Estado inicial con valores que indican actividad sospechosa
  const [stats, setStats] = useState({
    misinformation: {
      level: 78, // Alto porcentaje de desinformación
      trend: "up",
    },
    postsLastHour: {
      count: 324,
      percentage: 85, // Alto para indicar actividad inusual
      normal: 50,
    },
    newUsersLastHour: {
      count: 156,
      percentage: 92, // Muy alto, indicando creación masiva
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
      newAccounts: 68, // % de cuentas nuevas (últimas 24h)
      suspicious: true,
    },
  });

  /**
   * Actualiza las estadísticas (para uso futuro si se quiere hacer dinámico)
   */
  const updateStats = (newStats) => {
    setStats((prev) => ({
      ...prev,
      ...newStats,
    }));
  };

  /**
   * Reduce el nivel de desinformación cuando se completa correctamente una misión
   * Se utiliza cuando el jugador clasifica correctamente todos los bots/humanos
   */
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

  const value = {
    stats,
    updateStats,
    reduceMisinformation,
  };

  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
};
