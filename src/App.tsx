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
  const [timer, setTimer] = useState<number>(25)
  const [short, setShort] = useState<number>(5)
  const [long, setLong] = useState<number>(15)
  const [OptionTimer, setOptionTimer] = useState<number>(25)
  const [OptionShort, setOptionShort] = useState<number>(5)
  const [OptionLong, setOptionLong] = useState<number>(15)

  return (
    <div className="App">
    <MyContext.Provider value={{theme, setTheme, open, setOpen, OptionTimer, setOptionTimer, OptionShort, setOptionShort, OptionLong, setOptionLong, setTimer, setShort, setLong}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Menu />
        <div className="timer__section">
          <Timer time={timer} />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </MyContext.Provider>
    </div>
  )
}

export default App
