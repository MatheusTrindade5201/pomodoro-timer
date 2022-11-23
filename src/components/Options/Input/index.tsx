import { InputOptionsLabel } from "./style"

interface Input {
    title: string,
    value: number
}

const Option = (props: Input) => {

    return(
        <InputOptionsLabel>
        <h3>{props.title}:</h3>
        <input value={props.value} type={"number"}></input>
        </InputOptionsLabel>
    )
}

export default Option