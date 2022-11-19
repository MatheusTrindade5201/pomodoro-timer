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