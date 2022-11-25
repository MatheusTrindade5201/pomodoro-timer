import { InputOptionsLabel } from "./style"

interface Input {
    title: string,
    value: string
}

const Option = (props: Input) => {

    return(
        <InputOptionsLabel>
        <h3>{props.title}:</h3>
        <input value={props.value} type={"time"} step='1'></input>
        </InputOptionsLabel>
    )
}

export default Option