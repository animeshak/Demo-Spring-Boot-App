import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/register', { username, password });
            setMessage(response.data);
            navigate('/Login')
        } catch (error) {
            setMessage('Registration failed');
        }
    };

    return (
        <div className='form-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
export default Register