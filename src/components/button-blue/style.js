import styled from 'styled-components'

export const Container = styled.button`
   background: rgb(7,64,186);
background: linear-gradient(90deg, rgba(7,64,186,1) 0%, rgba(0,212,255,1) 100%);
    width: 24rem;
    border: none;
    border-radius: 0.6rem;
    padding: 1rem 2.2rem;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
        transform: translateY(-5px);
    }
`