import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    &:hover{
        filter: brightness(.9);
    }
    color: #808080;
    padding: 1rem 2rem;
    border: 1px solid #414141;
    margin-top: 1rem;
    border-radius: 0.4rem;
    >a{
        color: white;
        text-decoration: none;
    }
`