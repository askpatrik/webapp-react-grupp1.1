import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
  

    const handleLogout = () => {
        
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
