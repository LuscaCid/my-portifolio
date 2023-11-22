import styled from 'styled-components'

export const Container = styled.h1`
    font-size: ${({isPrincipal}) => isPrincipal ? "6.6rem" : "3.2rem"} ;
    font-family: 'Source Code Pro', monospace;
    color: white;
    border-bottom: ${({isPrincipal}) => isPrincipal ? "5px solid #414141" :  "3px solid #414141"};
    width: fit-content;
    border-radius: .4rem;
    margin-bottom: 2rem;

    @media(max-width:44em){
        font-size: 2.5rem;
    } 
`
