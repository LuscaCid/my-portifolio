import {Container, MainContent, About, Stacks, Portifolios} from './style'
import { Header } from '../../components/header'
import { H1 } from '../../components/title'
import { P } from '../../components/paragraph'
import { ButtonBlue } from '../../components/button-blue'
import { StackCard } from '../../components/stackCard'
import { SideNav } from '../../components/sideNav'
import { Portifolio } from '../../components/portifolio'


export function Principal(){
  return (
    <Container>
      <Header />
      <SideNav />
      <main>
        <MainContent>
        <div className="texts">
          <H1 
          isPrincipal
          title = "I'm a fullstack developer"
          />
          <p>Hi! Welcome to my portifolio web-site. I'm fascinated by programming and i created a lot of single projects with Javascript, html, css, git, github, react, sqlite, node.js.</p>
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
        lang= "git" 
        src = 'src/assets/git.png'
        title = "git"
        />
        <StackCard
        lang= "npm" 
        src = 'src/assets/npm-svgrepo-com.svg'
        title = "npm"
        />
        <StackCard
        lang= "html" 
        src = 'src/assets/html-5-svgrepo-com.svg'
        title = "HTML"
        />
        <StackCard
        lang= "css" 
        src = 'src/assets/css-3-svgrepo-com.svg'
        title = "CSS"
        />
        <StackCard
        lang= "sqlite" 
        src = 'src/assets/sqlite-svgrepo-com.svg'
        title = "sqlite"
        />
        <StackCard
        lang= "node" 
        src = 'src/assets/node.png'
        title = "node"
        />
        <StackCard
        lang= "github" 
        src = 'src/assets/github.png'
        title = "github"
        />
        
      </Stacks>
      
        <Portifolio 
        title = "primeiro"
        />
      

      </main>
      
      
    </Container>
  )

}