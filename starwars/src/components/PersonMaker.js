import React from "react"
import styled from "styled-components"

const PersonMaker = props => {
    const PersonMakerDiv = styled.div`
    background-color: #defbfc;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    border: 1px solid gray;
    width: 30%;

    @media only screen and (max-width: 400px) {
        width: 80%
      }
    `

    const PersonMakerH2 = styled.h2`
    font-family: calibri;
    border-bottom: 1px solid black;
    `

    const PersonMakerP = styled.p`
    font-family: calibri;
    `

    return (
        <PersonMakerDiv>
            <PersonMakerH2>{props.personName}</PersonMakerH2>
            <PersonMakerP>Birth Year: {props.birthYear}</PersonMakerP>
            <PersonMakerP>Eye Color: {props.eyeColor}</PersonMakerP>
            <PersonMakerP><a href={props.personUrl} target="_blank" rel="noopener noreferrer">External API Link</a></PersonMakerP>
        </PersonMakerDiv>
    )
}

export default PersonMaker