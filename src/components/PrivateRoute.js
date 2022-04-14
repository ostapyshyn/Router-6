import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { LogContext } from '../LogContext';

function PrivateRoute() {
  const { isLogged } = useContext(LogContext);
  return isLogged ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateRoute;
