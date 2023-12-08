import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { defaultLanguage, locales, SupportedLocale } from "../locales";
import { IntlProvider as ReactIntlProvider } from "react-intl";

export function IntlProvider({children}: PropsWithChildren){
    const [locale, setLocale]= useState<SupportedLocale>(() => {
        //read language from bus
        let lang ='tn';
        if(!lang){
            lang=navigator.language.toLowerCase().split(/[_-]+/)[0];
        }
        if(!Object.keys(locales).includes(lang.toLowerCase())){
            lang=defaultLanguage;
        }
        return lang as SupportedLocale;
    });

    useEffect(()=>{
        setLocale('tn'.toLowerCase() as SupportedLocale)
    })

        return (
            <ReactIntlProvider 
            locale={locale}
             messages={locales[locale]} 
             textComponent={Fragment}>{children}</ReactIntlProvider>
        )
}