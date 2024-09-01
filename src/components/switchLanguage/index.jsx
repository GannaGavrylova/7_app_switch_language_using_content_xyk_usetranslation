import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./styles.module.css";

function SwitchLanguage() {
  const { language, handleChange } = useContext(LanguageContext);

  function toggleChange() {
    const newLanguage = language === "en" ? "ru" : "en";

    handleChange(newLanguage);
  }
  return (
    <div className={styles.button_container}>
      <button onClick={toggleChange}>
        Switch <br />
        language
      </button>
    </div>
  );
}

export default SwitchLanguage;
