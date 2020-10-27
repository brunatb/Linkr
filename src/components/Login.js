import React,{useState} from 'react';
import {useHistory} from   'react-router-dom';
import axios from 'axios';

import Forms from '../components/Forms';

export default function Login({setTask}){
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const history = useHistory();

    function verifyInputs(){
        if (email === '' || password === '' )
            alert("Preencha todos os campos");
        else{
            const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_in", {email, password});
            request.then(() => history.push('/timeline')).catch(() => alert("Email/Senha incorretos"));
        }
    }

    return(
        <>
            <Forms>
                <input  type="email" name="email" placeholder="e-mail"
                        onChange={e => setEmail(e.target.value)}
                        value={email}/>
                <input  type="password" name="senha" placeholder='password' 
                        onChange={e => setPassword(e.target.value)}
                        value={password}/>
                <button onClick={verifyInputs}>Log In</button>
            </Forms>
            <p onClick={() => setTask(false)}>First time? Create an account</p>
        </>
    )
}


