import styled from "styled-components"
export const Container = styled.div`
    width: 32rem;
    padding: 3rem 5rem;
    background: none;
    border: 1px solid #414141;
    border-radius: .6rem;
    color: white;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    >img{
        width: 10rem;
    }
    box-shadow: ${({lang})=> {
        if(lang == "javascript"){
            return `0 1rem 2rem -1rem rgb(255,255,0, 0.5)`
        }


    }};
`