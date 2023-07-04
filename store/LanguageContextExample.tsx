import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "@/locales/en.json";
import trMessages from "@/locales/tr.json";
import {
  getLanguageFromLocalStorage,
  setLanguageLocalStorage,
} from "@/utils/helpers";

interface ILanguageProviderProps {
  children: React.ReactNode;
}

interface ILanguageContextProps {
  language: string;
  handleLanguageChange: (selectedLanguage: string) => void;
}

export const LanguageContext = React.createContext<ILanguageContextProps>({
  language: "",
  handleLanguageChange: () => {},
});

export const LanguageProvider = ({ children }: ILanguageProviderProps) => {
  const [language, setLanguage] = useState("en");

  const messages: Record<string, { [key: string]: string }> = {
    en: enMessages,
    tr: trMessages,
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setLanguageLocalStorage(selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = getLanguageFromLocalStorage();
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      <IntlProvider locale={language} messages={messages[language]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
