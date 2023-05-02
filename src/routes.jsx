import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePagina from './components/BasePagina';
import './Global.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Error from './pages/Error';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePagina />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
