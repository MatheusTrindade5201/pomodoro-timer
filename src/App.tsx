import { useState } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Timer from "./components/Timer"
import { MyContext } from "./context/myContext"
import GlobalStyle from "./styles/global"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"


function App() {

  const [theme , setTheme] = useState<DefaultTheme>(light)
  const [open, setOpen] = useState<boolean>(false)
  const [times, setTimes] = useState<Array<string>>(['00:25:00', '00:05:00', '00:15:00'])

  return (
    <div className="App">
    <MyContext.Provider value={{theme, setTheme, open, setOpen, times, setTimes}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Menu />
        <div className="timer__section">
          <Timer minutes={25} seconds={0} />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </MyContext.Provider>
    </div>
  )
}

export default App
