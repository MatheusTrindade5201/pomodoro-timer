import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import light from "../styles/themes/light";
export type GlobalContent = {
    theme: DefaultTheme,
    setTheme: (c:DefaultTheme) => void,
    open: boolean,
    setOpen: (c:boolean) => void,
    timer: string,
    setTimer: (c:string) => void,
    short: string,
    setShort: (c:string) => void,
    long: string,
    setLong: (c:string) => void,
}

export const MyContext = createContext<GlobalContent>({
    theme: light,
    setTheme: () => {},
    open: false,
    setOpen: () => {},
    timer: '00:25:00',
    setTimer: () => {},
    short: '00:05:00',
    setShort: () => {},
    long: '00:15:00',
    setLong: () => {}
});

