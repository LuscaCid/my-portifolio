import {Container, MainContent, About, Stacks} from './style'
import { Header } from '../../components/header'
import { H1 } from '../../components/title'
import { P } from '../../components/paragraph'
import { ButtonBlue } from '../../components/button-blue'
import { StackCard } from '../../components/stackCard'


export function Principal(){
  return (
    <Container>
      <Header />
      <main>
        <MainContent>
        <div className="texts">
          <H1 
          isPrincipal
          title = "I'm a fullstack developer"
          />
          <p>Hi! Welcome to my github. I'm fascinated by programming and i created a lot of single projects with Javascript, html, css, git, github, react, sqlite, node.js.</p>
          <ButtonBlue title = "Portifolio" 
          />
        </div>
        
        <img src="src/assets/avatar.jfif" alt="user-image" />
      </MainContent>

      <About>
        <H1 
        title = "About"
        />
        <P content = "My name is Lucas, I'm 20 years old and I'm passionate about technology, I came from a city in the interior of Bahia, and I've been developing software for approximately a year and a half, I currently work as an intern at the Santa Luzia hospital and I have the dream of starting to work as a developer coming soon."/>

      </About>
      <H1 title='Stacks'/>
      <Stacks>
        <StackCard
        lang= "react" 
        src = 'src/assets/react-svgrepo-com (1).svg'
        title = "React.js"
        />
        <StackCard
        lang= "javascript" 
        src = 'src/assets/javascript.png'
        title = "javascript"
        />
        <StackCard
        lang= "javascript" 
        src = 'src/assets/javascript.png'
        title = "javascript"
        />
        <StackCard
        lang= "javascript" 
        src = 'src/assets/javascript.png'
        title = "javascript"
        />
        <StackCard
        lang= "javascript" 
        src = 'src/assets/javascript.png'
        title = "javascript"
        />
        <StackCard
        lang= "javascript" 
        src = 'src/assets/javascript.png'
        title = "javascript"
        />
      </Stacks>

      </main>
      
      
    </Container>
  )

}