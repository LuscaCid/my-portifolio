import styled from 'styled-components'

export const Container = styled.header`
    z-index: 999;
    width: 100%;
    background: ${({theme}) => theme.colors.black};
    position: fixed;
    box-shadow: 0 1rem 2rem -1rem rgb(0,0,0,0.5);
    top: 0;
    padding: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >h1{
        font-size: 3.2rem;
        color: white;
    }
    >nav ul {
        display: flex;
        list-style: none;
        align-items: center;
        color: white;
        font-size: 1.4rem;
        gap: 1.4rem;
        text-transform: uppercase;
    }
    >nav ul li{
        border-bottom: 3px solid #414141;
        cursor: pointer;
        transition: transform 0.4s ease-in;
    }
    >nav ul li:hover{
        transform: scale(1.03);
    }

`