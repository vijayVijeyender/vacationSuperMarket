import { ReactNode } from 'react';
import en from './en.json'
import tn from './tn.json'

type MessageId= keyof typeof en;

export const defaultLanguage='en';
export type SupportedLocale='en' |'tn';
export const locales:{[key in SupportedLocale]: Record<MessageId,string>} ={
    en,
    tn
    
};

export type TranslateMessageTn = <T extends string | ReactNode= string>(
    code:string,
    values?:Record<string,string>,
)=> T;
