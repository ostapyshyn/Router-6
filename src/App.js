import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { Notfound } from './pages/Notfound';
import { Singlepage } from './pages/Singlepage';
import { Layout } from './components/Layout';
import { LogProvider } from './LogContext';
import PrivateRoute from './components/PrivateRoute';

export const LogContext = React.createContext();

function App() {
  return (
    <>
      <LogProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route element={<PrivateRoute />}>
                <Route path='about' element={<About />} />
                <Route path='posts' element={<Posts />} />
                <Route path='posts/:id' element={<Singlepage />} />
              </Route>
              <Route path='*' element={<Notfound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LogProvider>
    </>
  );
}
export default App;
