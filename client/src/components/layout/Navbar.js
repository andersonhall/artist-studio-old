import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth({});
  };
  return auth.token ? (
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
          <Link to='/' onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>Artist Studio</Link>
      </h1>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
