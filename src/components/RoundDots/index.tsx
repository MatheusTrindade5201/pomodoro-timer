import { Dots, RoundDotsContainer } from "./style"

interface Props{
    round: number
}

const RoundDots = (props: Props) => {
    return(
        <RoundDotsContainer>
            <Dots round={props.round >= 0 ? false : true}></Dots>
            <Dots round={props.round >= 2 ? false : true}></Dots>
            <Dots round={props.round >= 4 ? false : true}></Dots>
            <Dots round={props.round >= 6 ? false : true}></Dots>
        </RoundDotsContainer>
    )
}

export default RoundDots