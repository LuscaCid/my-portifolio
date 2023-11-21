import { Container } from './style'
import { Link, animateScroll as scroll } from 'react-scroll';
import {React} from 'react'

export function Header(){
    function handleScrollToAbout(){
        scroll.scrollToTop()
    }
    return (
        <Container>
            <h1>LucasCid</h1>
            <nav>
                <ul>
        
                    <li onClick={handleScrollToAbout}
                    >About</li>
                    
                    <Link 
                    smooth
                    duration={500}
                    
                    to={'stacks' }>
                        <li>Stacks</li>
                    
                    </Link>
                    <Link 
                    duration={500}
                    smooth
                    to='projects'>
                        <li>Projects</li>
                    </Link>
                    <Link 
                    duration={500}
                    smooth
                    to='contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>            
        </Container>
    )
}