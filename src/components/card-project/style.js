import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    &:hover{
        filter: brightness(.9);
    }
    color: #808080;
    padding: 1.2rem 1.6rem;
    border: 1px solid #414141;
    margin-top: 1rem;
    border-radius: 0.4rem;
    >a{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: white;
        text-decoration: none;
    }
    img{
        width: 7rem;
        border-radius: 50%;
    }
`