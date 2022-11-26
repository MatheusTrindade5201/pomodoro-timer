import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import light from "../styles/themes/light";
export type GlobalContent = {
    theme: DefaultTheme,
    setTheme: (c:DefaultTheme) => void,
    open: boolean,
    setOpen: (c:boolean) => void,
    OptionTimer: string,
    setOptionTimer: (c:string) => void,
    OptionShort: string,
    setOptionShort: (c:string) => void,
    OptionLong: string,
    setOptionLong: (c:string) => void,
    setTimer: (c:string) => void,
    setShort: (c:string) => void,
    setLong: (c:string) => void,
}

export const MyContext = createContext<GlobalContent>({
    theme: light,
    setTheme: () => {},
    open: false,
    setOpen: () => {},
    OptionTimer: '00:25:00',
    setOptionTimer: () => {},
    OptionShort: '00:05:00',
    setOptionShort: () => {},
    OptionLong: '00:15:00',
    setOptionLong: () => {},
    setTimer: () => {},
    setShort: () => {},
    setLong: () => {},
});
