import {Container } from './style'
import { ProjectCard } from '../card-project'
import { H1 } from '../title'
import { useEffect, useState } from 'react'


export function Portifolio({user}){
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(()=> {
        async function fetchData(user){
            const response = await fetch(`https://api.github.com/users/${user}/repos`)
            .then(data => data.json())
            console.log(response)  
            
            setData(response)
        }
        fetchData(user)
    }, [])
    
    useEffect(()=> { 
        const filteredRepos = data.filter((repo) => repo.name.includes('api') || repo.name.includes('API') || repo.name.includes('frontend'))
        console.log(filteredRepos)
        setFilteredData(filteredRepos)
    }, [data])
    return (
        <Container>
            <H1
            title= "Some projects made by me..."

            />
            {
            
            filteredData.map((repo, index) => {
                 
                return <ProjectCard 
                key = {String(index)}
                title = {repo.name} />
                          
            })
            
            }
            
        </Container>

    )

}