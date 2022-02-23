import { Outlet } from 'react-router-dom';
// import Alert from '../layout/Alert';

const Layout = () => {
  return (
    <section className='container'>
      {/* TODO: <Alert /> */}
      <Outlet />
    </section>
  );
};

export default Layout;
