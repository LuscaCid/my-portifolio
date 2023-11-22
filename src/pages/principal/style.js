import styled from 'styled-components'

export const Container = styled.div`
    padding: 14rem 0;
    >main{
        width: min(100rem, 80%);
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 7rem;
    }
`

export const MainContent = styled.div`
    display: flex;
    gap: 3rem;
   
    >img{
        width: 30rem;
        height: 30rem;
        border-radius: 2rem;
    }
    .texts{ 
        width: min(90rem) ;
        display: flex;
        flex-direction: column;
        gap: 2.3rem;
        >p{
            font-size: 1.7rem;
            color: rgb(210,210,230);
        }
    }
    @media(max-width: 44em){
        display: flex;
        flex-direction: column;
        .texts{
            width: min(41rem, 90%);
            
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