import { Container } from './style'

export function Header(){
    return (
        <Container>
            <h1>LucasCid</h1>
            <nav>
                <ul>
                    <li onClick = {()=> {
                        console.log('clickou')
                    }}>About</li>

                    <li>Stacks</li>

                    <li>Projects</li>
                    
                    <li>Contact</li>
                </ul>
            </nav>            
        </Container>
    )
}