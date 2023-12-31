import { Container } from "./style";
import { P } from "../paragraph";
export function ProjectCard({img_url ,updated_at,description ,src, title, ...rest}){
    return (
        <Container
        {...rest}
        >
            <a target="_blank" href={`https://github.com/LuscaCid/${title} ` }>
                
                <h1>{title}</h1>
                <P
                content= {description} 
                />
                <P
                content= {updated_at} 
                />
            </a>
            <img src={img_url} alt= {img_url} />
        </Container>

    )

}