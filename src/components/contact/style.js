import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid #414141;
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  >input, textarea{
    width: 100%;
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