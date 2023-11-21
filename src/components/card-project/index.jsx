import { Container } from "./style";
import { P } from "../paragraph";
export function ProjectCard({src, title, ...rest}){
    return (
        <Container
        {...rest}
        >
            <a target="_blank" href={`https://github.com/LuscaCid/${title} ` }>
                
                <h1>{title}</h1>
                <P
                content="" 
                />
            </a>
            
        </Container>

    )

}