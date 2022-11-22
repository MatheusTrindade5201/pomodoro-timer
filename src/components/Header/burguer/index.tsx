import { useContext, useState } from "react"
import { MyContext } from "../../../context/myContext"
import { BurgerWrapper } from "./style"

const Burguer = () => {

    const {open, setOpen} = useContext(MyContext)

    return(
        <BurgerWrapper open={open} onClick={() => open === false ? setOpen(true) : setOpen(false)}>
            <div/>
            <div/>
            <div/>
        </BurgerWrapper>
    )
}

export default Burguer