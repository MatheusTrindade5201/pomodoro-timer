import { useContext } from "react"
import { MyContext } from "../../context/myContext"
import { MenuContainer, Title } from "./style"

const Menu = () => {

    const {open} = useContext(MyContext)

    return(
        <MenuContainer open={open}>
            <Title>Menu</Title>
        </MenuContainer>
    )
}

export default Menu