import { Container } from "./style";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SocialButton } from "../social-button";
import { FiMail } from 'react-icons/fi'
import { useState } from "react";

export function SideNav(){
    
    return (
        <Container>
            <SocialButton
            src = "https://github.com/luscacid"
            icon={FaGithub}
            title="My github"
            />
            <SocialButton
            src = "https://github.com/luscacid"
            icon={FiMail}
            title="My E-mail"
            />
            <SocialButton
            src = "https://www.linkedin.com/in/lucas-cid-1ba940269/"
            icon={CiLinkedin}
            title="my Linkedin"
            />
            <SocialButton
            src = "https://instagram.com/luscacid"
            icon={FaInstagram}
            title="My instagram"
            />
        </Container>
    )
}