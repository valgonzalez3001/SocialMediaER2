import React from "react";
import "./StatsPanel.css";
import { useStats } from "../../contexts/StatsProvider";
import { useTranslation } from "react-i18next";
import {
  FaRobot,
  FaBrain,
  FaFlag,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

/* ── SVG: semicírculo gauge ────────────────────────────── */
const HalfGauge = ({ value, color }) => {
  const r = 28;
  const arc = Math.PI * r;
  const filled = Math.min(value / 100, 1) * arc;
  return (
    <svg width="80" height="46" viewBox="0 0 80 46" style={{ display: "block" }}>
      <path
        d="M 8 40 A 32 32 0 0 1 72 40"
        fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round"
      />
      <path
        d="M 8 40 A 32 32 0 0 1 72 40"
        fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
        strokeDasharray={`${filled} ${arc}`}
        style={{ transition: "stroke-dasharray 0.8s ease" }}
      />
      <text x="40" y="38" textAnchor="middle" fill={color}
        fontSize="13" fontWeight="700" fontFamily='"Share Tech Mono", monospace'>
        {value}%
      </text>
    </svg>
  );
};

/* ── SVG: anillo donut ─────────────────────────────────── */
const DonutChart = ({ pct, color, label, size = 62 }) => {
  const r = 19;
  const circ = 2 * Math.PI * r;
  const filled = Math.min(pct / 100, 1) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <circle cx="24" cy="24" r={r} fill="none"
        stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
      <circle cx="24" cy="24" r={r} fill="none"
        stroke={color} strokeWidth="6"
        strokeDasharray={`${filled} ${circ - filled}`}
        strokeDashoffset={circ / 4}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 0.8s ease" }}
      />
      <text x="24" y="27" textAnchor="middle" fill={color}
        fontSize="9.5" fontWeight="700" fontFamily='"Share Tech Mono", monospace'>
        {label}
      </text>
    </svg>
  );
};

export const StatsPanel = () => {
  const {
    stats,
    challenge1Completed,
    challenge2Completed,
    challenge3Completed,
    suspectUsersCount,
  } = useStats();
  const { t } = useTranslation();

  const threatLevel = challenge3Completed ? 0
    : challenge2Completed ? 26
    : challenge1Completed ? 52
    : 78;
  const threatColor =
    threatLevel >= 70 ? "#e74c3c" : threatLevel >= 40 ? "#f39c12" : "#27ae60";

  const botPct = challenge1Completed ? 0 : stats.botActivity.percentage;
  const botColor = challenge1Completed ? "#27ae60" : "#e74c3c";

  const aiPct = challenge2Completed ? 4 : 34;
  const aiColor = challenge2Completed ? "#27ae60" : "#95a5a6";

  const integrityPct = challenge3Completed ? 92 : 22;
  const integrityColor = challenge3Completed ? "#27ae60" : "#f39c12";

  return (
    <div className="stats-panel">

      {/* ── Header ── */}
      <div className="sp-header">
        <span className="sp-header-title">{t("statsPanel.title")}</span>
        <span className={`sp-sys-badge ${challenge3Completed ? "sp-sys-badge--ok" : "sp-sys-badge--alert"}`}>
          {challenge3Completed ? t("statsPanel.statusSecure") : t("statsPanel.statusAlert")}
        </span>
      </div>

      {/* ── Gauge de amenaza ── */}
      <div className="sp-threat">
        <span className="sp-threat-name">{t("statsPanel.misinformationLevel")}</span>
        <div className="sp-gauge-wrap">
          <HalfGauge value={threatLevel} color={threatColor} />
        </div>
      </div>

      {/* ══════════════════════════════════════
          MÓDULO 1 — Red de Bots
          ══════════════════════════════════════ */}
      <div className={`sp-module${challenge1Completed ? " sp-module--success" : ""}`}>
        <div className="sp-mod-head">
          <FaRobot className={`sp-mod-icon ${challenge1Completed ? "sp-mod-icon--success" : "sp-mod-icon--danger"}`} />
          <span className="sp-mod-title">{t("statsPanel.botModule.title")}</span>
          {challenge1Completed
            ? <span className="sp-badge sp-badge--ok">{t("statsPanel.statusSecure")}</span>
            : <span className="sp-badge sp-badge--danger">{t("statsPanel.statusAlert")}</span>
          }
        </div>

        <div className="sp-chart-row">
          <DonutChart pct={botPct} color={botColor} label={`${botPct}%`} />
          <div className="sp-chart-metrics">
            <div className={`sp-metric-box ${challenge1Completed ? "sp-metric-box--ok" : "sp-metric-box--danger"}`}>
              <span className="sp-metric-val">{challenge1Completed ? 0 : stats.botActivity.detected}</span>
              <span className="sp-metric-lbl">{t("statsPanel.botModule.detected")}</span>
            </div>
            <div className={`sp-metric-box ${challenge1Completed ? "sp-metric-box--ok" : "sp-metric-box--danger"}`}>
              <span className="sp-metric-val">{challenge1Completed ? 0 : suspectUsersCount}</span>
              <span className="sp-metric-lbl">{t("statsPanel.botModule.suspicious")}</span>
            </div>
          </div>
        </div>

        <p className="sp-mod-note">
          {challenge1Completed ? t("statsPanel.botModule.resolvedNote") : t("statsPanel.botModule.note")}
        </p>
      </div>

      {/* ══════════════════════════════════════
          MÓDULO 2 — Detector de IA
          ══════════════════════════════════════ */}
      <div className={`sp-module${challenge2Completed ? " sp-module--success" : ""}`}>
        <div className="sp-mod-head">
          <FaBrain className={`sp-mod-icon ${challenge2Completed ? "sp-mod-icon--success" : "sp-mod-icon--offline"}`} />
          <span className="sp-mod-title">{t("statsPanel.aiModule.title")}</span>
          {challenge2Completed
            ? <span className="sp-badge sp-badge--ok">{t("statsPanel.aiModule.statusOnline")}</span>
            : <span className="sp-badge sp-badge--offline">{t("statsPanel.aiModule.status")}</span>
          }
        </div>

        <div className="sp-chart-row">
          <div className="sp-donut-wrap">
            <DonutChart pct={aiPct} color={aiColor} label={challenge2Completed ? "<5%" : "~34%"} />
            <span className="sp-donut-sub">{t("statsPanel.aiModule.aiContentRate")}</span>
          </div>
          <div className="sp-status-list">
            <div className="sp-status-row">
              <span className={`sp-dot ${challenge2Completed ? "sp-dot--on" : "sp-dot--off"}`} />
              <span className="sp-status-text">
                {challenge2Completed ? t("statsPanel.aiModule.detectorOnline") : t("statsPanel.aiModule.detector")}
              </span>
            </div>
            <div className="sp-status-row">
              <span className={`sp-dot ${challenge2Completed ? "sp-dot--off" : "sp-dot--on"}`} />
              <span className="sp-status-text">{t("statsPanel.aiModule.manualMode")}</span>
            </div>
          </div>
        </div>

        <p className={`sp-mod-note${challenge2Completed ? "" : " sp-mod-note--warn"}`}>
          {challenge2Completed ? t("statsPanel.aiModule.resolvedNote") : t("statsPanel.aiModule.reason")}
        </p>
      </div>

      {/* ══════════════════════════════════════
          MÓDULO 3 — Moderación de contenido
          ══════════════════════════════════════ */}
      <div className={`sp-module${challenge3Completed ? " sp-module--success" : ""}`}>
        <div className="sp-mod-head">
          <FaFlag className={`sp-mod-icon ${challenge3Completed ? "sp-mod-icon--success" : "sp-mod-icon--warn"}`} />
          <span className="sp-mod-title">{t("statsPanel.modModule.title")}</span>
          {challenge3Completed
            ? <span className="sp-badge sp-badge--ok">{t("statsPanel.doneModule.status")}</span>
            : <span className="sp-badge sp-badge--warn">{t("statsPanel.modModule.status")}</span>
          }
        </div>

        <div className="sp-chart-row">
          <div className="sp-donut-wrap">
            <DonutChart pct={integrityPct} color={integrityColor} label={`${integrityPct}%`} />
            <span className="sp-donut-sub">{t("statsPanel.modModule.integrity")}</span>
          </div>
          <div className="sp-stacked">
            <div className="sp-status-list">
              <div className="sp-status-row">
                <span className={`sp-dot ${challenge3Completed ? "sp-dot--off" : "sp-dot--on"}`} />
                <span className="sp-status-text">{t("statsPanel.modModule.manual")}</span>
              </div>
              {challenge3Completed && (
                <div className="sp-status-row">
                  <span className="sp-dot sp-dot--on" />
                  <span className="sp-status-text">{t("statsPanel.modModule.automated")}</span>
                </div>
              )}
            </div>
            <div className={`sp-metric-box sp-metric-box--inline ${challenge3Completed ? "sp-metric-box--ok" : "sp-metric-box--warn"}`}>
              <span className="sp-metric-val">{challenge3Completed ? 0 : 3}</span>
              <span className="sp-metric-lbl">{t("statsPanel.modModule.misuse")}</span>
            </div>
          </div>
        </div>

        <p className={`sp-mod-note${challenge3Completed ? "" : " sp-mod-note--warn"}`}>
          {challenge3Completed ? t("statsPanel.doneModule.note") : t("statsPanel.modModule.note")}
        </p>
      </div>

    </div>
  );
};
