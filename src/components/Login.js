import React,{useState, useContext} from 'react';
import {useHistory} from   'react-router-dom';
import axios from 'axios';

import Forms from '../components/Forms';
import UserContext from '../contexts/UserContext';

export default function Login({setTask}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enable,setEnable] = useState(false);
    const {user, setUser, setUserToken} = useContext(UserContext);
    const history = useHistory();

    function verifyInputs(){
        if (email === '' || password === '' )
            alert("Preencha todos os campos");
        else{
            setEnable(true);
            const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_in", {email, password});
            request.then(props => {
                history.push('/timeline');
                setUser(props.data);
                setUserToken({headers: {"user-token": props.data.token}})
            }).catch(() => {
                alert("Email/Senha incorretos");
                setEnable(false);
            });
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
                <button onClick={verifyInputs} type="submit" disabled={enable}>Log In</button>
            </Forms>
            <p onClick={() => setTask(false)}>First time? Create an account</p>
        </>
    )
}


