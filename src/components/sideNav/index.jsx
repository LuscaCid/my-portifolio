import { Container, Li } from "./style";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export function SideNav(){


    return (
        <Container
        
        >
            <div className="links">
            <Li>
                <a href="https://github.com/luscacid" target="_blank">
                    <FaGithub 
                    color="white"
                    size={40} 
                    />
                    
                </a>    
            </Li>
            
            <Li>
                <a href="https://www.linkedin.com/in/lucas-cid-1ba940269/" target="_blank">
                    < CiLinkedin
                    color="white"
                    size={40} 
                    />
                </a>
            </Li>
            <Li>
                <a href="https://instagram.com" target="_blank"> 
                    {<FaInstagram 
                    color="white"
                    size={40} 
                    />}
                </a>
            </Li>
            </div>  
           
        </Container>
    )
}