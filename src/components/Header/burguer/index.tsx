import { useState } from "react"
import { BurgerWrapper } from "./style"

const Burguer = () => {

    const [open, setOpen] = useState<boolean>(false)

    return(
        <BurgerWrapper open={open} onClick={() => open === false ? setOpen(true) : setOpen(false)}>
            <div/>
            <div/>
            <div/>
        </BurgerWrapper>
    )
}

export default Burguer