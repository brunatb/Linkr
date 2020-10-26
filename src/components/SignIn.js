import React from 'react';

import Forms from '../components/Forms';

export default function SignIn({setTask}){
    return(
        <>
            <Forms>
                <input type="email" name="email" placeholder='e-mail' />
                <input type="password" name="password"         placeholder='password' />
                <input type="text" name="user"         placeholder='username' />
                <input type='url' name="picture"         placeholder='picture url' />
                <button>Sign Up</button>
            </Forms>
            <p onClick={() => setTask(true)}>Switch back to log in</p>
        </>
    )
}
