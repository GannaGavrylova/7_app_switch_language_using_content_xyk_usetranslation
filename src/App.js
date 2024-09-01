import { useState } from "react";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { LanguageContext } from "./context/LanguageContext";
import SwitchLanguage from "./components/switchLanguage";
import TextChange from "./components/textChange";

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  function handleChange(newLanguege) {
    setLanguage(newLanguege);
    i18n.changeLanguage(newLanguege);
  }

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, handleChange }}>
        <Suspense fallback="loading">
          <TextChange />
          <SwitchLanguage />
        </Suspense>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
