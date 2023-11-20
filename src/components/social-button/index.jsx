import { Container } from "./style";
import { useState } from "react";


export const SocialButton = ({ src ,icon : Icon ,title }) => {
    const [hovered, setHovered] = useState(false)

    function onMouseEnter(){
        setHovered(true)
    }
    function onMouseLeave(){
        setHovered(false)
    }
    return (
        <Container
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <a href={src} target="_blank">
                <Icon 
                
                color = "white"
                size = {40} />
                {hovered ? title : ""}
            </a>     
        </Container>
    )
}