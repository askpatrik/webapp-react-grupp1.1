import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './logout.css';

const Logout = () => {
    const [, , removeCookie] = useCookies();
    const navigate = useNavigate();

    const handleLogout = () => {
        removeCookie('session', { path: '/' });
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUsername');
        navigate('/login');
    };

    return (
        <button type="button" onClick={handleLogout} className="logout-button">
            Logga Ut
        </button>
    );
};
const loggedInUsername = localStorage.getItem('loggedInUsername') || '';
<h1>Logged in as {loggedInUsername} </h1>

export default Logout;
