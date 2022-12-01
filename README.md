# Pomodoro Timer


Esse é um projeto desenvolvido com Reactjs e styled-components, utilizando como linguagem o TypeScript.

- [x] Visualizar o temporizador.
- [x] Trocar entre tema claro e escuro.
- [x] Trocar o tempo do pomodoro e das pausas.
- [x] Iniciar,parar e resetar o temporizador.
- [x] Acompanhar a rodada atual atravez de um indicador.
- [x] Responsivo 


  - Link do Site-solução: [Pomodoro Timer](https://pomodoro-timer-six-eta.vercel.app/)

## Preview do produto final

![Captura de tela 2022-12-01 202423](https://user-images.githubusercontent.com/104238483/205180248-78771cce-9ec6-4fd9-8618-c1f3487de9a6.png)

## Detalhes do projeto: 

#### Para a estilização, foi utilizado o style-components

##### Estilo global:

```
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
       margin: 0;
       padding: 0; 
    }

    body{
        background-color: ${props => props.theme.settings.primary};
        overflow: hidden;
    }

    .timer__section{
        height: calc(100vh - 61px - .5rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

`

export default GlobalStyle
```

### Troca de tema

Ainda com o styled-components, foi feito a troca de temas da pagina de forma dinamica

##### dark:

```
export default {
    title: 'dark',
    settings:{
        primary: '#020D21',
        secondary: '#0b365b',
        primary_text: '#FDFEFE',
        secondary_text: '#EEF6F6',
    }
}
```

##### light:

```
export default {
    title: 'light',
    settings:{
        primary: '#D6E4FF',
        secondary: '#0A4977',
        primary_text: '#07223A',
        secondary_text: '#F6FEFA',
    }
}
```

### Default Theme

Como requisito TyeScript, foi necessário declarar um estilo padrão para os estilos criado acima, da seguinte forma:

```
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title:string,
    settings: {
        primary: string,
        secondary: string,
        primary_text: string,
        secondary_text: string,
    };
  }
}
```

### Contexto

Os valores da alicação que são compartilhados entre componentes, são passados inteiramente por um contexto:

```
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
    long:number ,
    short:number ,
    timer: number,
    started: boolean,
    setStarted: (c:boolean) => void
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
    timer: 25,
    long: 15,
    short:5 ,
    started: false,
    setStarted: () => {}
});
```

#### Hooks

Para o controle de renderização do tempo usado no temporizador, usamos os Hooks useState e useEffect, junto a useStates para acompanhar a mudança dos valores, e claro, o useContext para 

#### Desenvolvimento 

Caso queira fazer o clone do repositório, por favor usar o comando abaixo para download das dependencias:
```
npm intall
```
