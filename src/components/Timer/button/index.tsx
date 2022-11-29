import { ButtonStart } from "./style"

interface props{
    text: boolean | string,
    disabled?: boolean,
    Function:() => void | number,
}

const Button = (props: props) => {
    return(
        <ButtonStart text={props.text} disabled={props.disabled} onClick={props.Function}>
            {props.text}
        </ButtonStart>
    )
}

export default Button