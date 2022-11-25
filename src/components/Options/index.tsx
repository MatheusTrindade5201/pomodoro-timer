import { useContext } from "react"
import { MyContext } from "../../context/myContext"
import Option from "./Input"
import { OptionsWrapper } from "./style"

const TimerOptions = () => {
    
    const {timer, short, long, setTimer, setShort, setLong} = useContext(MyContext)
    return(
        <OptionsWrapper>
            <Option timerValue={timer} Change={value => setTimer(value)} title={'Timer'} />
            <Option timerValue={short} Change={value => setShort(value)} title={'Short Pause'} />
            <Option timerValue={long} Change={value => setLong(value)} title={'Long Pause'} />
        </OptionsWrapper>
    )
}

export default TimerOptions