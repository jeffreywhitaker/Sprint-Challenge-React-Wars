import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

import PersonMaker from "./PersonMaker"

export default function PersonGrid() {
    const [people, setPeople] = useState([])

    const ContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
    `

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            const personArray = response.data.results
            console.log(personArray)
            setPeople(personArray)
        })
    }, [])

    return (
        <ContainerDiv>
            {people.map(item => <PersonMaker key={item.name} personName={item.name} eyeColor={item.eye_color} birthYear={item.birth_year} personUrl={item.url}/>)}
        </ContainerDiv>
    )
}