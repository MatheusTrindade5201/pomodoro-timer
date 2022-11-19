import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import GlobalStyle from "./styles/global"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"


function App() {

  const [theme, setTheme] = useState(light)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
