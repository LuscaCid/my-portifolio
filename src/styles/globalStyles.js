import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-size: 62.5%;
    --ff-primary: 'Poppins', sans-serif;
    --elements-border-radius : 0.6;
    
  }
  body{
    background: #222;
    
  }
    
`