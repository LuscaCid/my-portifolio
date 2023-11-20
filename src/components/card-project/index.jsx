import { Container } from "./style";
import { P } from "../paragraph";
export function ProjectCard({src, title, ...rest}){
    return (
        <Container
        {...rest}
        >
            <img src={src} alt={title} />
            <h1>{title}</h1>
            <P
            content="" 
            />
        </Container>

    )

}