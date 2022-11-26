import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import light from "../styles/themes/light";
export type GlobalContent = {
    theme: DefaultTheme,
    setTheme: (c:DefaultTheme) => void,
    open: boolean,
    setOpen: (c:boolean) => void,
    OptionTimer: number,
    setOptionTimer: (c:number) => void,
    OptionShort: number,
    setOptionShort: (c:number) => void,
    OptionLong: number,
    setOptionLong: (c:number) => void,
    setTimer: (c:number) => void,
    setShort: (c:number) => void,
    setLong: (c:number) => void,
}

export const MyContext = createContext<GlobalContent>({
    theme: light,
    setTheme: () => {},
    open: false,
    setOpen: () => {},
    OptionTimer: 25,
    setOptionTimer: () => {},
    OptionShort: 5,
    setOptionShort: () => {},
    OptionLong: 15,
    setOptionLong: () => {},
    setTimer: () => {},
    setShort: () => {},
    setLong: () => {},
});
