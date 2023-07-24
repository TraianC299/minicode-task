import { useTranslation } from "react-i18next";

const useLanguage = () => {
    const { i18n } = useTranslation();

    const onChangeLang = (lang:string) => {
        const lang_code = lang
        i18n.changeLanguage(lang_code);
      };

    return {
      onChangeLang,
      currentLang: i18n.language,
    }
}

export default useLanguage;