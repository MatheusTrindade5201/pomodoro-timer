import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import light from "../styles/themes/light";
export type GlobalContent = {
    theme: DefaultTheme,
    setTheme: (c:DefaultTheme) => void,
    open: boolean,
    setOpen: (c:boolean) => void,
    times: Array<string>,
    setTimes: (c:Array<string>) => void,
}

export const MyContext = createContext<GlobalContent>({
    theme: light,
    setTheme: () => {},
    open: false,
    setOpen: () => {},
    times: ['00:25:00', '00:05:00', '00:15:00'],
    setTimes: () => {}
});

