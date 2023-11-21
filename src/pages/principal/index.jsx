import {Container, MainContent, About, Stacks} from './style'
import { Header } from '../../components/header'
import { H1 } from '../../components/title'
import { P } from '../../components/paragraph'
import { ButtonBlue } from '../../components/button-blue'
import { StackCard } from '../../components/stackCard'
import { SideNav } from '../../components/sideNav'
import { Portifolio } from '../../components/portfolio'
import { Contact } from '../../components/contact'
import Git_img from '../../assets/git.png'
import Github_img from '../../assets/github.png'
import React_img from '../../assets/react-svgrepo-com (1).svg'
import Javascript_img from '../../assets/javascript.png'
import Npm_img from '../../assets/npm-svgrepo-com.svg'
import Css_img from '../../assets/css-3-svgrepo-com.svg'
import Html_img from '../../assets/html-5-svgrepo-com.svg'
import Sqlite_img from '../../assets/sqlite-svgrepo-com.svg'
import Node_img from '../../assets/node.png'
import Avatar_img  from '../../assets/avatar.jfif'

export function Principal(){

  return (
    <Container>
      <Header />
      <SideNav />
      <main>
        <MainContent id='main-content'>
          <div className="texts">
            <H1 
            isPrincipal
            title = "I'm a fullstack developer"
            />
            <p>Hi! Welcome to my portifolio web-site. I'm fascinated by programming and i created a lot of single projects with Javascript, html, css, git, github, react, sqlite, node.js.</p>
            <ButtonBlue title = "Portifolio" 
            />
          </div>
          
          <img src={Avatar_img} alt="user-image" />
        </MainContent>

        <About>
          <H1 
          title = "About"
          />
          <P content = "My name is Lucas, I'm 20 years old and I'm passionate about technology, I came from a city in the interior of Bahia, and I've been developing software for approximately a year and a half, I currently work as an intern at the Santa Luzia hospital and I have the dream of starting to work as a developer coming soon."/>

        </About>
      <div id="stacks">     
        <H1 title='Stacks'/>
      </div>  
        
        <Stacks >
          <StackCard
          lang= "react" 
          src = {React_img}
          title = "React.js"
          />
          <StackCard
          lang= "javascript" 
          src = {Javascript_img}
          title = "javascript"
          />
          <StackCard
          lang= "git" 
          src = {Git_img}
          title = "git"
          />
          <StackCard
          lang= "npm" 
          src = {Npm_img}
          title = "npm"
          />
          <StackCard
          lang= "html" 
          src = {Html_img}
          title = "HTML"
          />
          <StackCard
          lang= "css" 
          src = {Css_img}
          title = "CSS"
          />
          <StackCard
          lang= "sqlite" 
          src = {Sqlite_img}
          title = "sqlite"
          />
          <StackCard
          lang= "node" 
          src = {Node_img}
          title = "node"
          />
          <StackCard
          lang= "github" 
          src={Github_img}
          title = "github"
          />
          
        </Stacks>
        
        <Portifolio 
          user= "luscacid"/>
        
        <div id="contact">
          <Contact/>
        </div>
        
        
      </main>
      
      
    </Container>
  )

}