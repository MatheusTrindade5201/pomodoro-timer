import { InputOptionsLabel } from "./style"

interface Input {
    title: string,
    timerValue: number,
    Change: (c:number) => void
}

const Option = (props: Input) => {

    return(
        <InputOptionsLabel>
        <h3>{props.title}:</h3>
        <input value={props.timerValue} onChange={event => props.Change(Number(event.target.value))} type={'number'} ></input>
        </InputOptionsLabel>
    )
}

export default Option