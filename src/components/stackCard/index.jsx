import {Container} from './style'

export function StackCard({title, src, lang}){
    return (
        <Container
        lang = {lang}>
            <img src={src} alt={title} />
            <h1>
                {title}
            </h1>
        </Container>
    )
}