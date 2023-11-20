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
            icon={CiLinkedin}
            title="my Linkedin"
            />
            <SocialButton
            src = "https://github.com/luscacid"
            icon={FaInstagram}
            title="My instagram"
            />
        </Container>
    )
}