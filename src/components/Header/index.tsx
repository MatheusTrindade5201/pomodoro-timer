import { useContext } from "react"
import { MyContext } from "../../context/myContext"
import light from "../../styles/themes/light"
import Burguer from "./burguer"
import { HeaderContainer, Logo } from "./style"
import Toggle from "./Toggle"

const Header = () => {

    const {theme, setTheme} = useContext(MyContext)

    return(
        <HeaderContainer >
            <Logo>Pomodoro<p>Timer</p></Logo>
            <Toggle/>
            <Burguer />
        </HeaderContainer>
    )
}

export default Header