import { useContext } from "react"
import { MyContext } from "../../../context/myContext"
import dark from "../../../styles/themes/dark"
import light from "../../../styles/themes/light"
import { ToggleLabel } from "./style"

const Toggle = () => {

    const {theme, setTheme} = useContext(MyContext)

    return(
        <ToggleLabel >
            <input type="checkbox" />
            <span onClick={() => theme === light ? setTheme(dark) : setTheme(light)}/>
        </ToggleLabel>
    )
}

export default Toggle