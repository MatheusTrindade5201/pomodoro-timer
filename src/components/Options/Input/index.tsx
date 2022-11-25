import { InputOptionsLabel } from "./style"

interface Input {
    title: string,
    timerValue: string,
    Change: (c:string) => void
}

const Option = (props: Input) => {

    return(
        <InputOptionsLabel>
        <h3>{props.title}:</h3>
        <input value={props.timerValue} onChange={event => props.Change(event.target.value)} type={"time"} step='1'></input>
        </InputOptionsLabel>
    )
}

export default Option