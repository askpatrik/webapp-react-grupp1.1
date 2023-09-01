import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Logout = () => {

    const [, , removeCookie] = useCookies();
    const navigate = useNavigate();
  

    const handleLogout = () => {

        removeCookie('session', {path: '/'})
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUsername');
        navigate('/login');
    };

    return (
        <button type="button" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;
