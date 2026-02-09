import "./AIContent.css";
import React from "react";
import { useTranslation } from 'react-i18next';

import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const AIContent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className="ai-content-page">
                <h1>{t('nav.aiContent')}</h1>
            </div>
            <Navbar />
        </>
    );
};
