import styled from 'styled-components'

export const Container = styled.div`
    
    padding: 14rem 0;
    >main{
    
        width: min(100rem, 88%);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7rem;
    }
    @media(max-width: 41em){
        padding: 10rem 0;
        >main{
            width: min(30rem, 90%);
        }
    } 
    #contact{
        width: 100%;
    }
`

export const MainContent = styled.div`
    display: flex;
    gap: 3rem;
    width: 100%;
    >img{
        width: 30rem;
        height: 30rem;
        border-radius: 2rem;
    }
    .texts{ 
        width: min(90rem, 100%) ;
        display: flex;
        flex-direction: column;
        gap: 2.3rem;
        >p{
            font-size: 1.7rem;
            color: rgb(210,210,230);
        }
    }
    @media(max-width: 42em){
        display: flex;
        flex-direction: column;
        
        >img{
            width: 100%;
            object-fit: cover;
        }
    } 
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Stacks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const Portifolios = styled.div`

`