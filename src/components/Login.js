import React from 'react';

import Forms from '../components/Forms';

export default function Login({setTask}){

    return(
        <>
            <Forms>
		    	<input type="email" name="email" placeholder='e-mail' / >
                <input type="password" name="senha"     placeholder='password' />
                <button>Log In</button>
            </Forms>
            <p onClick={() => setTask(false)}>First time? Create an account</p>
        </>
    )
}


