import React, { useState } from 'react';
import './App.css';
import List from 'components/templates/List';
import LoginSection from './components/molecules/LoginSection';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return <>
      {isLoggedIn ? (
        <List handleLogout={handleLogout} />
      ) : (
        <LoginSection handleLogin={handleLogin} />
      )}
    </>
};

export default App;

