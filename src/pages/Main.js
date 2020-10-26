import React from 'react'
import styled from 'styled-components'
import Login from '../components/Login'

export default function Main(){

    return(
        <Container>
            <section>
                <h1>linkr</h1>
                <h2>save, share and discover<br />the best links on the web</h2>
            </section>
            <Login />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    height: 100vh;
    color: #FFF;
    h1{
        font-family: 'Passion One';
        font-size: 106px;
    }
    h2{
        font-size: 43px;
    }
    section{
        width: 60%;
        background: #151515;
        padding: 300px 100px;
    }
`;