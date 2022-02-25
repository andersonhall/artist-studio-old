import { Outlet } from 'react-router-dom';
import Alert from '../layout/Alert';

const Layout = () => {
  return (
    <section className='container'>
      <Alert />
      <Outlet />
    </section>
  );
};

export default Layout;
