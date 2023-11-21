import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  >input, textarea{
    padding: 1rem 2rem;
    border-radius: .5rem;
    border: none;
    background: #414141;
    resize: none;
    font-size: 1.6rem;
    color: #919191;
  }
  >textarea{
    height: 10rem;
  }
`