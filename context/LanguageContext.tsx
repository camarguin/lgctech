"use client";

import React, { createContext, useContext, useState, useRef } from "react";
import { Language, getTranslations } from "@/constants/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslations>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");
  const initialized = useRef(false);

  // Initialize language on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    const browser = navigator.language.startsWith("pt") ? "pt-br" : "en";
    setLanguageState(saved || browser);
    initialized.current = true;
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: getTranslations(language),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
