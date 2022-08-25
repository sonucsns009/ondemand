import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Maincategory from './pages/Maincategory';
import Mainsubcategory from './pages/Mainsubcategory';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

const App = () => {
  return (
    <div>
      <div className="row">
              </div>
    
    <BrowserRouter>
    
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/maincategory" element={<Maincategory/>} />
          <Route path="/mainsubcategory" element={<Mainsubcategory/>} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
};

export default App;