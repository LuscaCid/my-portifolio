import {Container, Photos } from './style'
import { ProjectCard } from '../card-project'
import { H1 } from '../title'
import { useEffect, useState } from 'react'
import rocket_notes_main from '../../photos/rocket-notes-main.png'
import rocket_notes from '../../photos/rocket-notes-main.png'
import netflix from '../../photos/netflix.png'
import netflix_main from '../../photos/netflix-main.png'

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
                'Authorization' : `${token}`,
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
            <div id="projects">
            <H1
            
            title= "Some projects made by me..."
            />
            </div>
            
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
            <H1
            title= "Some photos..."
            />
            <Photos>
                <img src={netflix} alt="" />
                <img src={rocket_notes} alt="" />
                <img src={netflix_main} alt="" />
                <img src={rocket_notes_main} alt="" />
            </Photos>
        </Container>

    )

}