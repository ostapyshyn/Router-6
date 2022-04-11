import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { Notfound } from './pages/Notfound';
import { Singlepage } from './pages/Singlepage';

import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='posts' element={<Posts />} />
          <Route path='posts/:id' element={<Singlepage />} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
