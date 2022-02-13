import styled from 'styled-components'

import img from '../../assets/filmspage.jpg'
import tiktokLogo from '../../assets/tiktoklogo.png'
import instagramLogo from '../../assets/instagramlogo.png'
import emailLogo from '../../assets/emaillogo.png'

import { Link } from 'react-router-dom'

export const Container = styled.div`
    height:100vh;
    display:grid;
    grid-template: repeat(4,1fr) / repeat(4,1fr);
    background: url(${img}) no-repeat center center fixed;
    background-size: cover;
    @media (max-width: 576px) {
        display:grid;
        grid-template: repeat(3,1fr) / repeat(2,1fr);
        flex-direction: column;
  }
`

export const NavBar = styled.nav`
    color:white;
    grid-row: 4 / 5;
    grid-column: 1 / 5;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media (max-width: 576px) {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
        display: flex;
        flex-direction:column ;
        justify-content:center;
        align-items:center;
    }
`

export const SocialMedia = styled.section`
    display:flex;
    padding-left:2rem;
    align-items:center;
    gap:2rem;
    @media (max-width: 576px) {
        background-color:rgba(0,0,0,.5) ;
  }
`


export const Enter = styled.h1`
color:white;
padding:2rem;
font-size:4rem;
font-family:"benzinFont";
&:hover{
    color:rgba(0,0,0,1);
}
`

export const LinkTo = styled.a`
color:white;
&:visited{
    color:white;
}
`

export const LinkRouter = styled(Link)`
color:white;
text-decoration: none;
&:visited{
    color:white;
    text-decoration: none;
}
&:hover{
    color:black;
    background-color:rgba(255,255,255,.5);

}
`

export const TikTokLogo = styled.div`
    width:4rem;
    height:4rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${tiktokLogo});
    &:hover{
    color:black;
    background-color:rgba(255,255,255,.5);
}
`

export const InstagramLogo = styled.div`
    width:4rem;
    height:4rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${instagramLogo});
    &:hover{
    color:black;
    background-color:rgba(255,255,255,.5);
}
`

export const EmailLogo = styled.div`
    width:8rem;
    height:4rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${emailLogo});
`
