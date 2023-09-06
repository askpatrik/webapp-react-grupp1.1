import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { setLoggedInUsername } from '../Articles/redux/userSlice';
import './logout.css';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const [, , removeCookie] = useCookies();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        removeCookie('session', { path: '/' });
        localStorage.removeItem('token');
        dispatch(setLoggedInUsername(''));
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
