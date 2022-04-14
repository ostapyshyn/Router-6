import React, { useContext } from 'react';
import { LogContext } from '../LogContext';
// import '../index.css';

const Home = () => {
  const { setIsLogged } = useContext(LogContext);

  return (
    <>
      <h1>Home page</h1>
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
