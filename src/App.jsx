import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AllProducts from './pages/AllProducts';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}


