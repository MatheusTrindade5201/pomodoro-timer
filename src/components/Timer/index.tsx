import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/myContext";
import Button from "./button";

import { TimerContainer } from "./style"

export interface timerValues{
    time: number,
}

const Timer = (props:timerValues) => {

    const {long, short, timer, setTimer, setLong, setShort, started, setStarted} = useContext(MyContext)
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
            }
        }, 1000);
    }
    
    if(started === true) {
        regressive(time)
    }
    
    return (
        <div>
            <TimerContainer>
                <span>{minuteSetOfTen}</span>
                <span>{minuteUnity}</span>
                <span>:</span>
                <span>{secondsSetOfTen}</span>
                <span>{secondsUnity}</span>
            </TimerContainer>
            <Button text={started === true ? 'Stop' : 'Start'}
            Function={() => setStarted(started === true ? false : true)}/>
            <Button text={'Reset'}
            Function={() => setTimeout(()=>{
                setTime(timer)
            }, 500)}
            disabled={started}/>
        </div>
    )
}

export default Timer