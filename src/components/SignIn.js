import axios from 'axios';
import {useHistory} from   'react-router-dom';
import React,{useContext, useState} from 'react';

import Forms from '../components/Forms';
import UserContext from '../contexts/UserContext';

export default function SignIn({setTask}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [enable, setEnable] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const history = useHistory();

    function verifyInputs(){
        if (email === '' || password === '' || username === '' || pictureUrl === ''){
            alert("Preencha todos os campos");
        }else{
            setEnable(true);
            const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_up', {email, password, username, pictureUrl});
            request.then(props => {
                history.push('/timeline');
                setUser(props.data);
            }).catch(() => {
                alert("Email já cadastrado!");
                setEnable(false);
            });
        }
    }

    return(
        <>
            <Forms>
                <input  type="email" name="email" placeholder='e-mail'
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                <input  type="password" name="password" placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                <input  type="text" name="user" placeholder='username'
                        onChange={e => setUsername(e.target.value)}
                        value={username} />
                <input  type='url' name="picture" placeholder='picture url' 
                        onChange={e => setPictureUrl(e.target.value)}
                        value={pictureUrl} />
                <button onClick={verifyInputs} type='submit' disabled={enable}>Sign Up</button>
            </Forms>
            <p onClick={() => setTask(true)}>Switch back to log in</p>
        </>
    )
}
