import { useContext } from "react"
import { MyContext } from "../../context/myContext"
import TimerOptions from "../Options"
import { MenuContainer, Title } from "./style"

const Menu = () => {

    const {open} = useContext(MyContext)

    return(
        <MenuContainer open={open}>
            <Title>Menu</Title>
            <TimerOptions />
        </MenuContainer>
    )
}

export default Menu