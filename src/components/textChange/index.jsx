import styles from "./styles.module.css";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

function TextChange() {
  const { t } = useTranslation();

  return (
    <div className={styles.text_container}>
      <h1>{t("welcome")}</h1>
      {/* <p>{t("description")}</p> */}
    </div>
  );
}

export default TextChange;
