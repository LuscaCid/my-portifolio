import { Container } from "./style";

export function ButtonBlue({title, onClick, ...rest}){
    return(

        <Container 
        onClick = {onClick}
        {...rest}
        >
            {title}
        </Container>
    )

}