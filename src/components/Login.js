import React from 'react';
import styled from 'styled-components';

export default function Login(){

    return(
        <Container>
            <Forms>
		    	<input type="email" name="email" placeholder='e-mail' / >
                <input type="password" name="senha"     placeholder='password' />
                <button>Log In</button>
            </Forms>
            <p>First time? Create an account</p>
        </Container>
    )
}

const Container = styled.div`
    width: 40%;
    background: #333;
    text-align: center;
    padding: 300px 0;

    p{
        font-family: 'Lato';
        font-size: 20px;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input, button{
        width: 80%;
        height: 50px;
        border-radius: 5px;
        font-size: 22px;
        margin: 10px 0;
    }
    input{
        padding: 10px;
    }

    button{
        background: #1877F2;
        color: #FFF;
        cursor: pointer;
    }
`;
