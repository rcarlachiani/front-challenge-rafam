import React, { useState } from 'react';
import './styles.scss';
import Logo from 'components/atoms/Logo';

function LoginSection({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === process.env.REACT_APP_USER && password === process.env.REACT_APP_PASSWORD) {
      sessionStorage.setItem('isLoggedIn', 'true');
      handleLogin();
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-items'>
        <div className='logo-login'>
          <Logo />
        </div>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='login-username'>
            <label className='login-text'>Usuario:</label>
            <input
              className='login-input'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='login-password'>
            <label className='login-text'>Contraseña:</label>
            <input
              className='login-input'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='login-button' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginSection;
