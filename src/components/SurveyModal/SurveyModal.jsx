import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import "./SurveyModal.css";

const SECTIONS = [
  { id: "opinion", type: "single-rating", scale: 5 },
  { id: "learning", type: "multi-rating", scale: 7 },
  { id: "guess", type: "multi-rating", scale: 7 },
  { id: "comments", type: "text" },
];

export const SurveyModal = ({ onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const currentSection = SECTIONS[currentStep];
  const isLastStep = currentStep === SECTIONS.length - 1;
  const progress = ((currentStep + 1) / SECTIONS.length) * 100;

  // Check if current section is complete
  const isSectionComplete = () => {
    const { id, type } = currentSection;

    switch (type) {
      case "single-rating":
        return answers[id] !== undefined;

      case "multi-rating": {
        const itemsKey = `survey.${id}Items`;
        const items = t(itemsKey, { returnObjects: true });
        if (!items || typeof items !== "object") return true;
        const itemKeys = Object.keys(items);
        return itemKeys.every((key) => answers[`${id}_${key}`] !== undefined);
      }

      case "text":
        return true; // Comments are optional

      default:
        return true;
    }
  };

  const canProceed = isSectionComplete();

  const handleRatingChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleTextChange = (value) => {
    setAnswers((prev) => ({ ...prev, comments: value }));
  };

  const handleNext = () => {
    if (currentStep < SECTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  const renderSingleRating = (sectionId, scale) => {
    const rangeText = t(`survey.${sectionId}Range`);
    return (
      <div className="survey-section">
        <p className="survey-range-hint">{rangeText}</p>
        <div className="survey-rating">
          {Array.from({ length: scale }, (_, i) => i + 1).map((value) => (
            <button
              key={value}
              className={`survey-rating-btn ${answers[sectionId] === value ? "selected" : ""}`}
              onClick={() => handleRatingChange(sectionId, value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderMultiRating = (sectionId, scale) => {
    const itemsKey = `survey.${sectionId}Items`;
    const items = t(itemsKey, { returnObjects: true });
    const rangeText = t("survey.rateRange");

    if (!items || typeof items !== "object") return null;

    const itemEntries = Object.entries(items);

    return (
      <div className="survey-section survey-section--scrollable">
        <p className="survey-range-hint">{rangeText}</p>
        <div className="survey-items-list">
          {itemEntries.map(([key, text]) => {
            const questionId = `${sectionId}_${key}`;
            const isAnswered = answers[questionId] !== undefined;
            return (
              <div key={key} className={`survey-item ${!isAnswered ? "survey-item--unanswered" : ""}`}>
                <p className="survey-item-text">{text}</p>
                <div className="survey-item-rating">
                  {Array.from({ length: scale }, (_, i) => i + 1).map((value) => (
                    <button
                      key={value}
                      className={`survey-rating-btn survey-rating-btn--small ${answers[questionId] === value ? "selected" : ""}`}
                      onClick={() => handleRatingChange(questionId, value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTextInput = () => {
    return (
      <div className="survey-section">
        <textarea
          className="survey-textarea"
          placeholder={t("survey.comments")}
          value={answers.comments || ""}
          onChange={(e) => handleTextChange(e.target.value)}
          rows={5}
        />
      </div>
    );
  };

  const renderSection = () => {
    const { id, type, scale } = currentSection;

    switch (type) {
      case "single-rating":
        return renderSingleRating(id, scale);
      case "multi-rating":
        return renderMultiRating(id, scale);
      case "text":
        return renderTextInput();
      default:
        return null;
    }
  };

  const getSectionTitle = () => {
    const { id, type } = currentSection;
    if (type === "text") {
      return t("survey.comments");
    }
    return t(`survey.${id}Title`);
  };

  return (
    <div className="survey-modal-overlay" onClick={onClose}>
      <div className="survey-modal" onClick={(e) => e.stopPropagation()}>
        <button className="survey-close-btn" onClick={onClose}>
          <RxCross2 />
        </button>

        <div className="survey-header">
          <h2>{t("survey.title", "Share Your Feedback")}</h2>
          <div className="survey-progress">
            <div className="survey-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <span className="survey-step-indicator">
            {currentStep + 1} / {SECTIONS.length}
          </span>
        </div>

        <div className="survey-content">
          <h3 className="survey-question">{getSectionTitle()}</h3>
          {renderSection()}
        </div>

        <div className="survey-footer">
          {!canProceed && (
            <span className="survey-required-hint">
              {t("survey.requiredHint", "Please answer all questions")}
            </span>
          )}
          <div className="survey-footer-buttons">
            <button
              className="survey-nav-btn survey-prev-btn"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              {t("survey.previous", "Previous")}
            </button>

            {isLastStep ? (
              <button
                className="survey-nav-btn survey-submit-btn"
                onClick={handleSubmit}
                disabled={!canProceed}
              >
                {t("survey.submit", "Submit")}
              </button>
            ) : (
              <button
                className="survey-nav-btn survey-next-btn"
                onClick={handleNext}
                disabled={!canProceed}
              >
                {t("survey.next", "Next")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
