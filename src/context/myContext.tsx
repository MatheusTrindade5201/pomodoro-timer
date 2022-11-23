import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import light from "../styles/themes/light";
export type GlobalContent = {
    theme: DefaultTheme,
    setTheme: (c:DefaultTheme) => void,
    open: boolean,
    setOpen: (c:boolean) => void,
    times: Array<number>,
    setTimes: (c:Array<number>) => void,
}

export const MyContext = createContext<GlobalContent>({
    theme: light,
    setTheme: () => {},
    open: false,
    setOpen: () => {},
    times: [25, 5, 10],
    setTimes: () => {}
});

