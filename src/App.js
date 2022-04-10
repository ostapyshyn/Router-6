import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { Notfound } from './pages/Notfound';

function App() {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}
export default App;
