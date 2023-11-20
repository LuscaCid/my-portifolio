import {Container } from './style'
import { ProjectCard } from '../card-project'
import { H1 } from '../title'

export function Portifolio(){
    return (
        <Container>
            <H1
            title= "Some projects made by me..."
            />
            <ProjectCard />
        </Container>

    )

}