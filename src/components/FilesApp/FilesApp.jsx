import React, { useState, useEffect, useRef } from "react";
import "./FilesApp.css";
import { useOS } from "../../contexts/OSProvider";
import { useTranslation } from "react-i18next";
import { useXAPI, XAPI_VERBS, ECHO_ACTIVITIES } from "../../contexts/XAPIProvider";
import { FaTimes, FaMinus, FaFolder, FaFolderOpen, FaLock, FaChevronRight, FaHome, FaArrowLeft } from "react-icons/fa";

const FOLDERS = [
  { id: "documents", labelKey: "filesApp.folders.documents", icon: "folder", items: 0 },
  { id: "images",    labelKey: "filesApp.folders.images",    icon: "folder", items: 0 },
  { id: "echo",      labelKey: "filesApp.folders.echo",      icon: "locked", items: null },
];

export const FilesApp = () => {
  const { closeApp, minimizeApp } = useOS();
  const { t } = useTranslation();
  const { sendStatement } = useXAPI();
  const [openFolder, setOpenFolder] = useState(null);
  const sentRef = useRef(false);

  useEffect(() => {
    if (sentRef.current) return;
    sentRef.current = true;
    sendStatement(
      XAPI_VERBS.LOOKED_AT,
      ECHO_ACTIVITIES.FILES_APP,
      null,
      { contextActivities: { grouping: [ECHO_ACTIVITIES.GAME] } }
    );
  }, []);

  const handleClose = () => closeApp("files");

  const currentFolder = FOLDERS.find(f => f.id === openFolder);

  return (
    <div className="files-app-backdrop" onClick={handleClose}>
      <div className="files-app-window" onClick={e => e.stopPropagation()}>

        {/* Title bar */}
        <div className="files-titlebar">
          <div className="files-window-title">
            <img src="/assets/folder.png" alt="" className="files-title-icon" />
            <span>{t("filesApp.title")}</span>
          </div>
          <div className="files-window-controls">
            <button className="files-window-btn minimize" onClick={minimizeApp} title={t("desktop.window.minimize")}>
              <FaMinus />
            </button>
            <button className="files-window-btn close" onClick={handleClose} title={t("desktop.window.close")}>
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="files-toolbar">
          <button
            className="files-back-btn"
            onClick={() => setOpenFolder(null)}
            disabled={openFolder === null}
            title={t("filesApp.back")}
          >
            <FaArrowLeft />
          </button>
          {/* Breadcrumb */}
          <nav className="files-breadcrumb">
            <span
              className={`files-breadcrumb-item ${openFolder === null ? "active" : "clickable"}`}
              onClick={() => setOpenFolder(null)}
            >
              <FaHome className="files-breadcrumb-icon" />
              {t("filesApp.thisPC")}
            </span>
            {currentFolder && (
              <>
                <FaChevronRight className="files-breadcrumb-sep" />
                <span className="files-breadcrumb-item active">
                  {t(currentFolder.labelKey)}
                </span>
              </>
            )}
          </nav>
        </div>

        {/* Body */}
        <div className="files-body">
          {/* Sidebar */}
          <aside className="files-sidebar">
            <p className="files-sidebar-section">{t("filesApp.thisPC")}</p>
            {FOLDERS.map(f => (
              <button
                key={f.id}
                className={`files-sidebar-item ${openFolder === f.id ? "active" : ""}`}
                onClick={() => setOpenFolder(f.id)}
              >
                {f.icon === "locked"
                  ? <FaLock className="files-sidebar-icon locked" />
                  : <FaFolder className="files-sidebar-icon" />
                }
                <span>{t(f.labelKey)}</span>
              </button>
            ))}
          </aside>

          {/* Content */}
          <main className="files-content">
            {openFolder === null && (
              <>
                <p className="files-section-label">{t("filesApp.thisPC")}</p>
                <div className="files-grid">
                  {FOLDERS.map(f => (
                    <button
                      key={f.id}
                      className={`files-folder-card ${f.icon === "locked" ? "locked" : ""}`}
                      onDoubleClick={() => setOpenFolder(f.id)}
                      onClick={() => setOpenFolder(f.id)}
                    >
                      {f.icon === "locked"
                        ? <FaFolderOpen className="files-folder-icon locked" />
                        : <FaFolder className="files-folder-icon" />
                      }
                      <span className="files-folder-name">{t(f.labelKey)}</span>
                      {f.icon === "locked"
                        ? <span className="files-folder-meta"><FaLock size={9} /> {t("filesApp.locked")}</span>
                        : <span className="files-folder-meta">{t("filesApp.items", { count: f.items })}</span>
                      }
                    </button>
                  ))}
                </div>
              </>
            )}

            {openFolder !== null && currentFolder?.icon !== "locked" && (
              <div className="files-empty-folder">
                <FaFolderOpen className="files-empty-icon" />
                <p>{t("filesApp.empty")}</p>
              </div>
            )}

            {openFolder === "echo" && (
              <div className="files-locked-folder">
                <FaLock className="files-locked-icon" />
                <p className="files-locked-title">{t("filesApp.lockedTitle")}</p>
                <p className="files-locked-message">{t("filesApp.lockedMessage")}</p>
              </div>
            )}
          </main>
        </div>

        {/* Status bar */}
        <div className="files-statusbar">
          {openFolder === null
            ? t("filesApp.items", { count: FOLDERS.length })
            : currentFolder?.icon === "locked"
              ? t("filesApp.locked")
              : t("filesApp.items", { count: 0 })
          }
        </div>
      </div>
    </div>
  );
};
