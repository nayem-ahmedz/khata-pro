import { useEffect, useState } from "react";
import i18n from "../i18n/setup";
import { LangContext } from "./LangContext";

export default function LanguageProvider({children}){
    const [ lang, setLang ] = useState(localStorage.getItem('lang') || 'en');
    const toggleLanguage = (lang) => {
        setLang(lang);
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    }
    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    const langInfo = {
        lang,
        toggleLanguage
    }
    return(
        <LangContext value={langInfo}>
            {
                children
            }
        </LangContext>
    );
}