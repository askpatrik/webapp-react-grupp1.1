import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './login.css'; // Import the CSS file
import './centered.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [, setCookie] = useCookies(['session']);

    const handleLogin = async () => {
        //const body = {
        //    "username": username, "password": password
        //}
        //const response = await fetch(/authenticate/login, {
        //    method: "POST",
        //    headers: {
        //        "Content-Type": "application/json"
        //    },
        //    body: JSON.stringify(body)
        //});
        //const data = await response.json();
        if (username === "patrik") {
            setCookie('session', 'test', { path: '/' });
            localStorage.setItem("token", "data.token")
            navigate('/articles');
        } else {
            alert('Wrong credentials.');
        }
    };

    // TODO: add styles
    return (
        <div className="centered-container">
            <h1>Login</h1>
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
