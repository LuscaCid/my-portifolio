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
    const [responses, setResponses] = useState([])

   
    
    useEffect(()=> { 
        
        const token = "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"
        
            const headers = new Headers({
                'Authorization' : `${token}`,
                'Accept' : 'application/vnd.github.v3+json'
            })

            const options = {
                method : "GET",
                headers : headers
            }
        
        async function fetchDataFiltered(user){
            
            const allRepos = await fetch(`https://api.github.com/users/${user}/repos`, options)
            .then(data => data.json())
        
            console.log(allRepos)
            
            const filteredByApi = allRepos.filter(repo => repo.name.includes("API") || repo.name.includes('api') || repo.name.includes('frontend') || repo.name.includes("react"))
            console.log(filteredByApi[0].updated_at)

            setRepoDedails(filteredByApi) 
        }   


        fetchDataFiltered(user)
    }, [])
    return (
        <Container>
            <div id="projects">
            <H1
            
            title= "Some projects made by me..."
            />
            </div>
            
            {
            repoDetails.map((repo, index) => {
                const dates = repo.updated_at
                const formatedDate = dates.replaceAll('-', '/')
                const finalDate = formatedDate.slice(0, 10)
                const formatedTime = formatedDate.slice(11, formatedDate.length -1)
                console.log(finalDate)
                return <ProjectCard 
                        key = {String(index)}
                        title = {repo.name} 
                        description = {repo.description}
                        updated_at={`Last commit ${finalDate} at ${formatedTime}`}
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