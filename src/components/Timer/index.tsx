import { TimerContainer } from "./style"

export interface timerValues{
    minutes: number,
    seconds: number
}

const Timer = (props:timerValues) => {
    return (
        <TimerContainer>
            <span>{props.minutes}</span>
            <span>:</span>
            <span>00</span>
        </TimerContainer>
    )
}

export default Timer