import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './login.css';
import logo from '../../Images/MVCS.png';
import { useDispatch } from 'react-redux';
import { setLoggedInUsername } from '../Articles/redux/userSlice';
import { useEffect } from 'react';
//import App from 'main.jsx'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [, setCookie] = useCookies(['session']);


    const handleLogin = async () => {
        const body = {
            "username": username, "password": password
        }
        const response = await fetch(`/authenticate/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        if (response.status === 200) {
            setCookie('session', 'test', { path: '/' });
            localStorage.setItem("token", data.token)
            dispatch(setLoggedInUsername(username))
            //localStorage.setItem('loggedInUsername', username);
            navigate('/articles');
        } else {
            alert('Wrong credentials.');
        }
    };


    // TODO: add styles
    return (
        <div className="centered-container">
            <h1>Login</h1>
            <img src={logo} alt="Logo" className="logo-animation" /> { }
            <form>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <a href="/register">Create a new account</a>
            </form>
        </div>
    );
};

export default Login;
