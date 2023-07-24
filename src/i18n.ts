import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";

i18n
.use(i18nBackend)
.use(initReactI18next)
.init({
  lng: "ro",
  fallbackLng: "ro",
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "http://localhost:3030/translations/{{lng}}.json",
  },
//   resources: {
//     ro: {
//         translation:{
//             nav_title:"Определенно вместе!"
//         }
//     },
//     ru: {
//         translation:{
//             nav_title:"Cu siguranță, împreună!"
//         }
//     },

//   },
});

export default i18n;