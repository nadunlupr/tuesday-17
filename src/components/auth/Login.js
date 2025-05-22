import { useState } from 'react';
import api from '../../services/api';

export default function Login(props) {
    const [state, setState] = useState({
        username: '',
        password: ''
    });

    return (
        <div>
            <div>
                <input type='text' placeholder='Username'
                    onChange={({ target: { value: username } }) => setState(prevState => ({
                        ...prevState,
                        username,
                    }))} />
                <input type='password' placeholder='Password'
                    onChange={({ target: { value: password } }) => setState(prevState => ({
                        ...prevState,
                        password,
                    }))} />
            </div>
            <div>
                <button onClick={() => loginWithUsernamePw(state.username, state.password)} > Login</button>
            </div>
        </div>
    )
}

async function loginWithUsernamePw(username, password) {
    try {
        const response = await api.post('/users/login', {
            username,
            password,
        });
        console.log('response: ', response);
    } catch (err) {
        console.log('error: ', err);
    }
}