import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { Notfound } from './pages/Notfound';
import { Singlepage } from './pages/Singlepage';
import { Layout } from './components/Layout';
import PrivateRoute from './components/PrivateRoute';

export const LogContext = React.createContext();

function App() {
  const [isLogged, setIsLogged] = useState(true);
  function logIn() {
    setIsLogged(true);
  }

  function logOut() {
    setIsLogged(false);
  }

  return (
    <>
      <button onClick={logIn}>LogIn</button>
      <button onClick={logOut}>LogOut</button>
      <LogContext.Provider value={{ isLogged, setIsLogged }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<PrivateRoute isLogged={isLogged} />}>
              <Route path='about' element={<About />} />
              <Route path='posts' element={<Posts />} />
              <Route path='posts/:id' element={<Singlepage />} />
            </Route>
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
      </LogContext.Provider>
    </>
  );
}
export default App;
