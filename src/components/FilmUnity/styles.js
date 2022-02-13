import styled from 'styled-components'


export const Container = styled.div`  
    font-size:3rem;
    font-family:"benzinFont";
    padding:3rem;
    color:rgba(255,255,255,1);
    background-color:rgba(0,0,0,.5);
    &:hover{
        color:black;
    background-color:rgba(255,255,255,.5); 
    }
    @media (max-width: 576px) {
        font-family:"benzinFont";
        font-size:1.5rem;
  }
`

export const LinkRouter = styled.a`
    text-decoration: none;
    
    &:visited{
        color:rgba(255,255,255,1);
    background-color:rgba(0,0,0,.5);
        text-decoration: none;
    }
    &:hover{
        color:black;
    background-color:rgba(255,255,255,.5); 
    }
`
export const Title = styled.h1``
export const Small = styled.p`
    font-size:1.5rem;
`
