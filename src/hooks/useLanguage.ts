import { useTranslation } from "react-i18next";
import DynamicTranslation from "../types/DynamicTranslation.type";

const useLanguage = () => {
    const { i18n } = useTranslation();
  const currentLang = i18n.language;
    const tDynamic= (object:DynamicTranslation) => {
      if(currentLang){
        return object[currentLang as keyof DynamicTranslation] || "";
      }else{
        return object["ro"] || "";
      }

    }

    const  onChangeLang = async(lang:string) => {
        const lang_code = lang
        await i18n.changeLanguage(lang_code);
      };

    return {
      onChangeLang,
      tDynamic,
      currentLang
    }
}

export default useLanguage;