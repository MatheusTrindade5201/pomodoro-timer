import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/myContext";
import { TimerContainer } from "./style"

export interface timerValues{
    time: number,
}

const Timer = (props:timerValues) => {

    const {long, short, timer, setTimer, setLong, setShort} = useContext(MyContext)
    const [time, setTime] = useState(timer)

    useEffect(() => {
       setTime(timer) 
    }, [timer])

    const minute = Math.floor(time/60);
    const seconds = time % 60;
    const [minuteSetOfTen, minuteUnity] = String(minute).padStart(2,'0');
    const [secondsSetOfTen, secondsUnity] = String(seconds).padStart(2,'0');

    function regressive(counter: number = 0){
        setTimeout(() => {
            if(counter > 0){
                setTime(counter-1);
                return regressive(counter -1)
            }
        }, 1000);
    }
    
    return (
        <TimerContainer>
            <span>{minuteSetOfTen}</span>
            <span>{minuteUnity}</span>
            <span>:</span>
            <span>{secondsSetOfTen}</span>
            <span>{secondsUnity}</span>
        </TimerContainer>
    )
}

export default Timer