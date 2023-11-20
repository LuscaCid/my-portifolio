import {Container } from './style'
import { ProjectCard } from '../card-project'
import { H1 } from '../title'
import { useEffect, useState } from 'react'


export function Portifolio({user}){
    const [data, setData] = useState([])

    useEffect(()=> {
        async function fetchData(user){
            const response = await fetch(`https://api.github.com/users/${user}/repos`)
            .then(data => data.json())
            console.log(response)  
            
            setData(response)
        }
        fetchData(user)
    }, [])
    
    return (
        <Container>
            <H1
            title= "Some projects made by me..."

            />
            {
            
            data.map((repo, index) => {
                console.log(data)
                if(index < 20 && index > 15){
                    return <ProjectCard 
                    key = {String(index)}
                    title = {repo.name} />
                } else return
                    
            })
            
            }
            
        </Container>

    )

}