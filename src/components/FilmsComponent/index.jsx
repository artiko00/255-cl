import { Container } from './styles'
import { useState } from 'react'
import { FilmUnity } from '../FilmUnity'
export const FilmsComponent = () => {

    const [films, setFilms] = useState([
        { title: "BESOS DE VENENO", link: "" },
        { title: "VEGAN KINKY", link: "https://www.youtube.com/watch?v=iALyQ-CvgU4" },
        { title: "SIÉNTELO MAMI", link: "https://www.youtube.com/watch?v=RTfHk8HTIqs" }
    ])
    return (
        <Container>
            {films.map(x => {
                return (
                    <FilmUnity key={x.title} title={x.title} link={x.link} />
                )
            })
            }
        </Container>
    )
}
