import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      This page doesn't exist. Go to <Link to='/'>home.</Link>
    </div>
  );
};

export { Notfound };
