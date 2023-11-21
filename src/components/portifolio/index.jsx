import {Container } from './style'
import { ProjectCard } from '../card-project'
import { H1 } from '../title'
import { useEffect, useState } from 'react'


export function Portifolio({user}){
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [repoDetails, setRepoDedails] = useState([])

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
        async function fetchDataFiltered(user){
            const token = "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"
           
            
            const headers = new Headers({
                'Authorization' : `token ${token}`,
                'Accept' : 'application/vnd.github.v3+json'
            })

            const options = {
                method : "GET",
                headers : headers
            }

            filteredRepos.map(async(repo) => {
                const infoDetaild = await fetch(`https://api.github.com/repos/${user}/${repo.name}`, options)
                .then(data => data.json())
                console.log(infoDetaild)
                return setRepoDedails(prevState => [...prevState, infoDetaild])
            })
            
        }
        fetchDataFiltered(user)
    }, [data])
    return (
        <Container>
            <H1
            title= "Some projects made by me..."
            />
            {
            repoDetails.map((repo, index) => {
                 
                return <ProjectCard 
                        key = {String(index)}
                        title = {repo.name} 
                        description = {repo.description}
                        updated_at={repo.updated_at}
                        />
                
            })
            }
            
        </Container>

    )

}