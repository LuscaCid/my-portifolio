import { Container } from "./style";

export const H1 = ({title, isPrincipal}) => {
    return (
        <Container isPrincipal = {isPrincipal}>
            {title}
        </Container>
    )
}