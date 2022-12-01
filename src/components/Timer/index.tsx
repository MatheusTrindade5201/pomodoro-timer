import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/myContext";
import RoundDots from "../RoundDots";
import Button from "./button";

import { TimerContainer } from "./style"

export interface timerValues{
    time: number,
}

const Timer = (props:timerValues) => {

    const {long, short, timer, setTimer, setLong, setShort, started, setStarted} = useContext(MyContext)
    const [time, setTime] = useState<number>(timer);
    const [round, setRound] = useState<number>(0)

    useEffect(() => {
        if(round > 7){
            setRound(0)
            setTime(timer)
        }
        if(round % 2 === 0){
            setTime(timer) 
        }
        if(round % 2 !== 0){
            if(round === 7){
                setTime(long)
            }else{
                setTime(short)
            }
        }
    }, [timer, short, long, round])

    const minute = Math.floor(time/60);
    const seconds = time % 60;
    const [minuteSetOfTen, minuteUnity] = String(minute).padStart(2,'0');
    const [secondsSetOfTen, secondsUnity] = String(seconds).padStart(2,'0');

    function regressive(counter: number = 0){
        setTimeout(() => {
            if(counter > 0){
                setTime(counter-1);
            }else{
                setRound(round => round + 0.5 )
                setTime(timer)
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
            <RoundDots round={round} />
            <Button text={started === true ? 'Stop' : 'Start'}
            Function={() => setStarted(started === true ? false : true)}/>
            <Button text={'Reset'}
            Function={() => setTimeout(()=>{
                setTime(timer);
                setRound(0)
            }, 500)}
            disabled={started}/>
        </div>
    )
}

export default Timer