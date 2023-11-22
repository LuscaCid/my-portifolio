import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    &:nth-child(1){
      margin-bottom: 22rem;
    }
`

export const Photos = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  >img {
    border-radius: .7rem;
    width: 49%;
    transition: transform 0.5s;
    box-shadow: 0 1rem 2rem -1rem #00000020;
  }
  >img:hover{
    transform: scale(1.16);
  }
  @media(max-width:42em){

    >img{
      width: 100%;
    }
  } 
`