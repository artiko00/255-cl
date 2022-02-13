import React from 'react'
import { Container, LinkRouter, Title,Small } from './styles'
export const FilmUnity = ({ title, link, small = "coming soon" }) => {
    return (
        <Container>
            <LinkRouter href={link} target="_blank">
                <Title>{title}</Title>
                {
                    link ? <Small>music video, 2021</Small> : <Small>{small}</Small>
                }
            </LinkRouter>
        </Container>
    )
}
