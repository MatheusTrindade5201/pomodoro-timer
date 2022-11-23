import { InputOptionsLabel } from "./style"

interface Input {
    title: string
}

const Option = (props: Input) => {

    return(
        <InputOptionsLabel>
        <h3>{props.title}:</h3>
        <input type={"number"}></input>
        </InputOptionsLabel>
    )
}

export default Option