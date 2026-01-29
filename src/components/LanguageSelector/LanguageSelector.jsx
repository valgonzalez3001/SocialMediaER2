import "./LanguageSelector.css";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "sr", name: "Српски", flag: "🇷🇸" },
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <IoLanguage className="language-selector-icon" />
        <span className="current-language">{currentLanguage.code}</span>
      </div>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`language-option ${lang.code === i18n.language ? "active" : ""}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
