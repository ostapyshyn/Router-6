import React, { useContext } from 'react';
import { LogContext } from '../LogContext';
// import '../index.css';

const Home = () => {
  const { isLogged, setIsLogged } = useContext(LogContext);

  return (
    <>
      <h1>Home page</h1>
      {isLogged ? (
        <h2>You're logged in and have access to posts and about pages</h2>
      ) : (
        <h2>You're logged out and don't have access to posts and about pages</h2>
      )}
      <div className='center'>
        <button className='button' onClick={() => setIsLogged(true)}>
          LogIn
        </button>
        <button className='button' onClick={() => setIsLogged(false)}>
          LogOut
        </button>
      </div>
    </>
  );
};

export { Home };
