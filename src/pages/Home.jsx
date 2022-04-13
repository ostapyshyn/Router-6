import React, { useContext } from 'react';

import LogContext from '../LogContext';

const Home = () => {
  const data = useContext(LogContext);
  console.log('home', data);

  

  return (
    <div>
      <h1>Home page</h1>
      
    </div>
  );
};

export { Home };
