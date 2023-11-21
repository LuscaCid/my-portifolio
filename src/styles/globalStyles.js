import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, body, input, button, textarea{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--ff-primary);
  }
  :root{
    font-size: 62.5%;
    --ff-primary:'Source Code Pro', monospace;
    --elements-border-radius : 0.6;

  }
  body{
    
    width: 100%;
    background: linear-gradient(125deg, ${({theme}) => theme.colors.background}, ${({theme}) => theme.colors.background2} ) ;
  }
    
`