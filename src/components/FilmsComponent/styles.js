import styled from 'styled-components'

export const Container = styled.div`
    grid-row: 2 / 4;
    grid-column: 1 / 5;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    box-sizing: content-box;
    @media (max-width: 576px) {
        grid-row: 1 / 3;
        grid-column: 1 / 3;
        display: flex;
        flex-direction:column ;
        justify-content:center;
        align-items:start;
        margin-top:5%;
    }
`

