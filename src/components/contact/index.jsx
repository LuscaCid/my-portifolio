import { Container } from "./style";
import { H1} from '../title'
import { ButtonBlue } from "../button-blue";
import { useState } from "react";
export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <Container>
      <H1 title='Contact' />

      <input 
      onChange = {e => setName(e.target.value)}
      type="text" 
      placeholder="Nome" />

      <input 
      onChange = {e => setEmail(e.target.value)}
      type="text" 
      placeholder="E-mail" />

      <textarea 
      onChange = {e => setMessage(e.target.value)}
      name="Message" 
      placeholder="Message"></textarea>
      <ButtonBlue 
      title="Enviar" /> 
    </Container>

  )  
}