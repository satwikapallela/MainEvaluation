import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

function Login() {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin') login({ role: 'admin', name: username });
    else login({ role: 'customer', name: username });
    navigate(username === 'admin' ? '/admin' : '/customer');
  };

  return (
    <div style={{ padding: '50px' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
