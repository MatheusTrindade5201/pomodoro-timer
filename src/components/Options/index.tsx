import { useContext } from "react"
import { MyContext } from "../../context/myContext"
import Option from "./Input"
import { ButtonOptions, OptionsWrapper } from "./style"

const TimerOptions = () => {
    
    const {OptionTimer, setOptionTimer, OptionShort, setOptionShort, OptionLong, setOptionLong, setLong, setShort, setTimer, started, setStarted} = useContext(MyContext)
    return(
        <OptionsWrapper>
            <Option timerValue={OptionTimer} Change={value => setOptionTimer(value)} title={'Timer'} />
            <Option timerValue={OptionShort} Change={value => setOptionShort(value)} title={'Short Pause'} />
            <Option timerValue={OptionLong} Change={value => setOptionLong(value)} title={'Long Pause'} />
            <ButtonOptions
            onClick={() => {
                setStarted(false);
                setTimeout(() => {
                    setTimer(OptionTimer*60);
                    setShort(OptionShort*60);
                    setLong(OptionLong*60);
                },1000)
                
            }}>Save</ButtonOptions>
        </OptionsWrapper>
    )
}

export default TimerOptions