import './App.css';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Layout from './components/layout/Layout';
import Landing from './components/pages/Landing';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dashboard from './components/dashboard/Dashboard';
import Classrooms from './components/pages/Classrooms';
import AuthContext from './context/AuthProvider';

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route element={<Layout />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={auth.token ? <Dashboard /> : <Login />} />
          <Route path='classrooms' element={auth.token ? <Classrooms /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
