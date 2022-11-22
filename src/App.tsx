import { useState } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
import Header from "./components/Header"
import Menu from "./components/Menu"
import { MyContext } from "./context/myContext"
import GlobalStyle from "./styles/global"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"


function App() {

  const [theme , setTheme] = useState<DefaultTheme>(light)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="App">
    <MyContext.Provider value={{theme, setTheme, open, setOpen}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Menu />
        <GlobalStyle />
      </ThemeProvider>
    </MyContext.Provider>
    </div>
  )
}

export default App
