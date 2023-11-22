import styled from "styled-components";

export const Container = styled.div`
    
    width: ${({hovered}) => {
            if(hovered)return "30rem"  
            else return "fit-content"
        }};
      
    >a{
        border: 1px solid #414141;
        border-radius: .3rem;
        padding: .3rem .8rem;
        background: ${({theme}) => theme.colors.background};
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        font-size: 1.8rem;
        gap: 1rem;
    }
    @media(max-width: 41em){
        
        >a{
            padding: 0.2rem .7rem;
            width: 4.3rem;
        }
    } 
`