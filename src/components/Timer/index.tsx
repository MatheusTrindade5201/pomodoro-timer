import { TimerContainer } from "./style"

export interface timerValues{
    time: number,
}

const Timer = (props:timerValues) => {

    const timer = props.time*60;
    const minute = Math.floor(timer/60);
    const seconds = timer % 60;
    const [minuteSetOfTen, minuteUnity] = String(minute).padStart(2,'0');
    const [secondsSetOfTen, secondsUnity] = String(seconds).padStart(2,'0');

    
    
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