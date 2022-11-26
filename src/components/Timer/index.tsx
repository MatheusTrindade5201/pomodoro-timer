import { TimerContainer } from "./style"

export interface timerValues{
    time: number,
}

const Timer = (props:timerValues) => {
    return (
        <TimerContainer>
            <span>{props.time}</span>
        </TimerContainer>
    )
}

export default Timer