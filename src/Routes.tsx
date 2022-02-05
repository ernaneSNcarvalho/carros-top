import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from './pages/Catalog/index';

const RoutesPath = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/"  element={<Home />}></Route>
      <Route path="/products" element={<Catalog />}></Route>
    </Routes>
  </BrowserRouter>
);

export default RoutesPath;