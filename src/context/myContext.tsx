import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import light from "../styles/themes/light";
export type GlobalContent = {
    theme: DefaultTheme,
    setTheme: (c:DefaultTheme) => void
}

export const MyContext = createContext<GlobalContent>({
    theme: light,
    setTheme: () => {},
});

