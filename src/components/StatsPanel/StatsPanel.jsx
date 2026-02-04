import React from "react";
import "./StatsPanel.css";
import { useStats } from "../../contexts/StatsProvider";
import { useTranslation } from "react-i18next";
import { FaExclamationTriangle, FaUsers, FaFileAlt, FaHashtag, FaRobot, FaChartLine } from "react-icons/fa";

/**
 * Componente StatsPanel - Panel de estadísticas del sistema
 * Muestra el nivel de desinformación y otras métricas relevantes
 */
export const StatsPanel = () => {
  const { stats } = useStats();
  const { t } = useTranslation();

  const getStatusColor = (percentage) => {
    if (percentage >= 70) return "#e74c3c"; // Rojo - Alto
    if (percentage >= 40) return "#f39c12"; // Naranja - Medio
    if (percentage <= 20) return "#27ae60"; // Verde - Bajo
    return "#27ae60"; // Verde - Bajo (default)
  };

  const getStatusText = (percentage) => {
    if (percentage >= 70) return t("statsPanel.statusHigh");
    if (percentage >= 40) return t("statsPanel.statusMedium");
    return t("statsPanel.statusLow");
  };

  // Determinar si mostrar warnings
  const showWarnings = stats.misinformation.level > 20;

  return (
    <div className="stats-panel">
      <div className="stats-header">
        <h3>{t("statsPanel.title")}</h3>
      </div>

      {/* Barra principal de desinformación */}
      <div className={`main-stat-card ${showWarnings ? 'alert' : 'success'}`}>
        <div className="stat-header">
          <FaExclamationTriangle className="stat-icon danger" />
          <div className="stat-title">
            <h4>{t("statsPanel.misinformationLevel")}</h4>
            <span className="stat-value" style={{ color: getStatusColor(stats.misinformation.level) }}>{stats.misinformation.level}%</span>
          </div>
        </div>
        <div className="progress-bar-container">
          <div
            className={`progress-bar ${showWarnings ? 'danger' : 'success'}`}
            style={{
              width: `${stats.misinformation.level}%`,
              backgroundColor: getStatusColor(stats.misinformation.level),
            }}
          >
            <span className="progress-label">{getStatusText(stats.misinformation.level)}</span>
          </div>
        </div>
        {showWarnings && (
          <p className="stat-description">
            {t("statsPanel.suspiciousActivityDetected")}
          </p>
        )}
        {!showWarnings && (
          <p className="stat-description success-message">
            ✅ {t("statsPanel.systemSecure")}
          </p>
        )}
      </div>

      {/* Desglose de estadísticas */}
      <div className="stats-breakdown">
        <h4 className="breakdown-title">{t("statsPanel.detailedAnalysis")}</h4>

        {/* Posts en las últimas horas */}
        <div className="stat-card">
          <div className="stat-info">
            <FaFileAlt className="stat-icon" />
            <div>
              <p className="stat-label">{t("statsPanel.postsLastHour")}</p>
              <p className="stat-number">{stats.postsLastHour.count}</p>
            </div>
          </div>
          <div className="progress-bar-container small">
            <div
              className="progress-bar"
              style={{
                width: `${stats.postsLastHour.percentage}%`,
                backgroundColor: getStatusColor(stats.postsLastHour.percentage),
              }}
            />
          </div>
          <p className="stat-note">
            {t("statsPanel.percentageAboveNormal", { percentage: stats.postsLastHour.percentage })}
          </p>
        </div>

        {/* Nuevos usuarios */}
        <div className="stat-card highlight">
          <div className="stat-info">
            <FaUsers className="stat-icon warning" />
            <div>
              <p className="stat-label">{t("statsPanel.newUsersLastHour")}</p>
              <p className="stat-number">{stats.newUsersLastHour.count}</p>
            </div>
          </div>
          <div className="progress-bar-container small">
            <div
              className="progress-bar"
              style={{
                width: `${stats.newUsersLastHour.percentage}%`,
                backgroundColor: getStatusColor(stats.newUsersLastHour.percentage),
              }}
            />
          </div>
          <p className="stat-note warning-text">
            {t("statsPanel.massAccountCreation")}
          </p>
        </div>

        {/* Hashtags virales */}
        <div className="stat-card">
          <div className="stat-info">
            <FaHashtag className="stat-icon" />
            <div>
              <p className="stat-label">{t("statsPanel.viralHashtags")}</p>
            </div>
          </div>
          <div className="hashtags-list">
            {stats.trendingHashtags.map((hashtag, index) => (
              <div key={index} className="hashtag-item">
                <span className={`hashtag ${hashtag.suspicious ? "suspicious" : ""}`}>
                  {hashtag.tag}
                </span>
                <span className="hashtag-count">{hashtag.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actividad de bots */}
        <div className="stat-card highlight">
          <div className="stat-info">
            <FaRobot className="stat-icon warning" />
            <div>
              <p className="stat-label">{t("statsPanel.botActivity")}</p>
              <p className="stat-number">{stats.botActivity.detected} {t("statsPanel.detected")}</p>
            </div>
          </div>
          <div className="progress-bar-container small">
            <div
              className="progress-bar"
              style={{
                width: `${stats.botActivity.percentage}%`,
                backgroundColor: getStatusColor(stats.botActivity.percentage),
              }}
            />
          </div>
          <p className="stat-note">
            {t("statsPanel.suspiciousInteractions", { percentage: stats.botActivity.percentage })}
          </p>
        </div>

        {/* Engagement */}
        <div className="stat-card">
          <div className="stat-info">
            <FaChartLine className="stat-icon" />
            <div>
              <p className="stat-label">{t("statsPanel.averageEngagement")}</p>
            </div>
          </div>
          <div className="engagement-bars">
            <div className="engagement-item">
              <span className="engagement-label">{t("statsPanel.likes")}</span>
              <div className="progress-bar-container tiny">
                <div
                  className="progress-bar"
                  style={{ width: `${stats.engagement.likes}%` }}
                />
              </div>
              <span className="engagement-value">{stats.engagement.likes}%</span>
            </div>
            <div className="engagement-item">
              <span className="engagement-label">{t("statsPanel.comments")}</span>
              <div className="progress-bar-container tiny">
                <div
                  className="progress-bar"
                  style={{ width: `${stats.engagement.comments}%` }}
                />
              </div>
              <span className="engagement-value">{stats.engagement.comments}%</span>
            </div>
            <div className="engagement-item">
              <span className="engagement-label">{t("statsPanel.shares")}</span>
              <div className="progress-bar-container tiny">
                <div
                  className="progress-bar"
                  style={{ width: `${stats.engagement.shares}%` }}
                />
              </div>
              <span className="engagement-value">{stats.engagement.shares}%</span>
            </div>
          </div>
        </div>

        {/* Edad de cuentas */}
        <div className="stat-card">
          <div className="stat-info">
            <FaUsers className="stat-icon" />
            <div>
              <p className="stat-label">{t("statsPanel.recentAccounts")}</p>
              <p className="stat-number">{stats.accountAge.newAccounts}%</p>
            </div>
          </div>
          <div className="progress-bar-container small">
            <div
              className="progress-bar"
              style={{
                width: `${stats.accountAge.newAccounts}%`,
                backgroundColor: getStatusColor(stats.accountAge.newAccounts),
              }}
            />
          </div>
          {stats.accountAge.suspicious && (
            <p className="stat-note warning-text">
              {t("statsPanel.abnormalProportionNewAccounts")}
            </p>
          )}
        </div>
      </div>

      {/* Nota informativa */}
      <div className="stats-footer">
        <p className="footer-note">
          {t("statsPanel.tip")}
        </p>
      </div>
    </div>
  );
};
