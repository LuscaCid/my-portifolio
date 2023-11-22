import styled from "styled-components"
export const Container = styled.div`
    margin: 0 auto;
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
    display: flex;
    >img{
        margin-bottom: 1rem;
        width: 10rem;
    }
    box-shadow: ${({lang})=> {
        switch(lang){
            case "javascript" : 
                return `0 1rem 1.7rem -1rem rgb(255,255,0,0.8)`
            case "html" :
                return "0 1rem 1.7rem -1rem #f0650980"
            case "react" : 
                return "0 1rem 1.7rem -1rem #61DBFB80"
            case "git" : 
                return  "0 1rem 1.7rem -1rem #f1502f80"   
            case "node" :
                return "0 1rem 1.7rem -1rem #78a06380"
            case "github" : 
                return "0 1rem 1.7rem -1rem #ffffff80"
            case "sqlite" : 
                return "0 1rem 1.7rem -1rem #61DBFB80"
            case "npm" :
                return "0 1rem 1.7rem -1rem #f1502f80"
            case "css" :
                return "0 1rem 2rem -1rem #61DBFc50"
        }
    


        //javascript `0 1rem 2rem -1rem rgb(255,255,0, 0.5)`
        //react "0 1rem 2rem -1rem #61DBFB"

    }};
    transition: transform 0.4s;
    &:hover{
        transform: scale(1.05);
    }
    @media(max-width:41em){
        width: 27rem ;
    }
`