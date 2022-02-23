import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='navbar bg-dark'>
    <h1>
      <Link to='/'>Artist Studio</Link>
    </h1>
    <ul>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/classrooms'>Classrooms</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
