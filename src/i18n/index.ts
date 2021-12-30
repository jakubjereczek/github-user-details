import i18n from "i18next";
import detector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";

import translationEN from "src/assets/locales/en.json";
import translationPL from "src/assets/locales/pl.json";
import translationDE from "src/assets/locales/de.json";

export enum TranslationKeys {
  LayoutFooterCreatedby = "layout.footer.created_by",
  LayoutSearchBarSearchInputLabel = "layout.search_bar.search_input_label",
  LayoutSearchBarSearchInputPlaceholder = "layout.search_bar.search_input_placeholder",
  LayoutResultCardTitle = "layout.result_card.title",
  LayoutResultCardBodyFollowers = "layout.result_card.body.followers",
  LayoutResultCardBodyFollowing = "layout.result_card.body.following",
  LayoutResultCardButton = "layout.result_card.button",
  LayoutResultCardBodySectionNameProjects = "layout.result_card.body.section_name.projects",
  LayoutResultCardFetchError = "layout.result_card.fetch_error",
  LayoutResultCardFetchErrorUserNotFound = "layout.result_card.fetch_error_user_not_found",
}

export const LANGUAGES = [
  {
    key: "pl",
  },
  {
    key: "en",
  },
  {
    key: "de",
  },
];

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
  de: {
    translation: translationDE,
  },
};

export const initI18next = () =>
  i18n
    .use(detector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });

export const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
