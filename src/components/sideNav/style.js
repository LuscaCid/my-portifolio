import styled from "styled-components";

export const Container = styled.nav`
    
    margin-top: -5rem;
    height: 100vh;
    position: fixed;
    border-radius: 0 .4rem .4rem 0;
    list-style: none;
    .links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    
`

export const Li = styled.li`
    width: ${({hovered})=> hovered ? "30rem" : 'fit-content'};
    border: ${({hovered, theme}) => hovered ? `1px solid ${theme.colors.background2}` : "none"};
    //transition: width 0.3s ease-in-out;
    border-radius: 0 .4rem 0 0;
    padding: 2rem 0;
    
    font-size: 1.6rem ;
    color: white ; 
    text-decoration: none;
    align-items: center;
    display: flex;
    transition: width 0.3s ease-in-out;
    a{
        width: 100% ;
        padding: 0 3rem ;
        display: flex;
        align-items: center;
        justify-content:space-between ;
        color:white;
        text-decoration: none;
    }
    background: ${({theme}) => theme.colors.background};
`
