import "./AIIncorrectUses.css";
import React from "react";
import { useTranslation } from 'react-i18next';

import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const AIIncorrectUses = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className="ai-incorrect-uses-page">
                <h1>{t('nav.aiIncorrectUses')}</h1>
                {/* Content will be added here */}
            </div>
            <Navbar />
        </>
    );
};
