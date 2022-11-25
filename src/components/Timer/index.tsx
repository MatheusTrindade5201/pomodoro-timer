import { TimerContainer } from "./style"

export interface timerValues{
    time: string,
}

const Timer = (props:timerValues) => {
    return (
        <TimerContainer>
            <span>{props.time}</span>
        </TimerContainer>
    )
}

export default Timer