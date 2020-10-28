import React from 'react'
import styled from 'styled-components';

export default function Publish() {
    return(
        <Container>
            <img src='./business+face+people+icon-1320086457520622872.png' />
            <div>
                <p>O que você tem para favoritar hoje?</p>
                <input type="text" name="link" placeholder='http://...'/>
                <textarea placeholder='Muito irado esse link falando de #javascript' />
                <button>Publicar</button>
            </div>
        </Container>
    );
}


const Container = styled.section`
    display: flex;
    height: 210px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    font-family: 'Lato';
    margin-bottom: 30px;


    img {
       width: 60px;
       height: 60px;
       border-radius: 50%;
    }

    div { 
        width: 100%;
        position: relative;
    }

    input, textarea {
        width: 100%;
        background: #EFEFEF;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px 10px;
    }

    input {
        height: 30px;
    }
    
    textarea {
        height: 70px;
    }

    button {
        width: 110px;
        height: 30px;
        background: #1877F2;
        border-radius: 5px;
        position: absolute;
        right: 0px;
        color: #fff;
    }
`;