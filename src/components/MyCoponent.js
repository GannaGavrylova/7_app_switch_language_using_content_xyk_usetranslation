import React from "react";
import { useTransition } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTransition();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("welcom")}</h1>
      <p>{t("desxription")}</p>
    </div>
  );
}
