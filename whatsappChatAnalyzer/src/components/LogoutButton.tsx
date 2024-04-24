import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/LogoutButton.css';

const LogoutButton: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = () => { 
        localStorage.clear();      
        navigate('/Login-register');
    };
    return (
        <button onClick={handleLogout} className="logout-button">     Logout  </button>
    );
};

export default LogoutButton;
