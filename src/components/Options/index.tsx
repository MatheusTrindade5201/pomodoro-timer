import { useContext } from "react"
import { MyContext } from "../../context/myContext"
import Option from "./Input"
import { OptionsWrapper } from "./style"

const TimerOptions = () => {
    
    const {times} = useContext(MyContext)
    console.log(times)
    return(
        <OptionsWrapper>
            <Option value={times[0]} title={'Timer'} />
            <Option value={times[1]} title={'Short Pause'} />
            <Option value={times[2]} title={'Long Pause'} />
        </OptionsWrapper>
    )
}

export default TimerOptions