import { useState, createContext, useMemo } from 'react';

const LogContext = createContext();

const LogProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);

  const value = useMemo(() => ({ isLogged, setIsLogged }), [isLogged]);

  return <LogContext.Provider value={value}>{props.children}</LogContext.Provider>;
};
export { LogContext, LogProvider };
