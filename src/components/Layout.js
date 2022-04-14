import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        <NavLink to='/about'>About</NavLink>
      </header>

      <main className='container'>
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};

export { Layout };
