import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
