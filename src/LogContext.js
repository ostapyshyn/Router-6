import React from 'react';

const LogContext = React.createContext({
  isLogged: null,
  setIsLogged: () => {},
});

export default LogContext;
