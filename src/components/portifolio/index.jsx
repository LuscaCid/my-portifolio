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
                setRepoDedails(prevState => [...prevState, infoDetaild])
                return 
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
                console.log(repoDetails)
                return <ProjectCard 
                        key = {String(index)}
                        title = {repo.name} 
                        description = {repo.description}
                        updated_at={repo.updated_at}
                        img_url={repo.owner.avatar_url}
                        />
                
            })
            }
            
        </Container>

    )

}