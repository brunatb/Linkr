import axios from 'axios';
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';

export default function Publish() {
    const [link, setLink] = useState('');
    const [text, setText] = useState('');
    const  { userToken } = useContext(UserContext);

    function verifyLink(){
        if(!link){
            alert('Preencha o campo de link!');
        }else{
            const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts', {link, text}, userToken);
            request.then(props => console.log(props)).catch(props => console.log(props.response.status));
        }
    }

    return(
        <Container>
            <img src='./business+face+people+icon-1320086457520622872.png' />
            <div>
                <p>O que você tem para favoritar hoje?</p>
                <input type="text" name="link" placeholder='http://...' 
                onChange={e => setLink(e.target.value)}
                value={link} />
                <textarea placeholder='Muito irado esse link falando de #javascript'
                onChange={e => setText(e.target.value)}
                value={text} />
                <div className='container-button'><button onClick={verifyLink}>Publicar</button></div>
            </div>
        </Container>
    );
}


const Container = styled.section`
    display: flex;
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
        padding: 0 0 0 10px;
    }
    
    p{
        color: #707070;
        font-size: 20px;
        line-height: 24px;
        margin: 15px 0 10px 0;
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

    .container-button{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    button {
        width: 110px;
        height: 30px;
        background: #1877F2;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
    }

    
`;