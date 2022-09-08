import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './components/Login';
import Registration from './components/Registration';
import Sidebar from './components/Sidebar';
import Maincategory from './pages/Maincategory';
import Mainsubcategory from './pages/Mainsubcategory';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App () {
  const auth = localStorage.getItem('user');
  console.warn(auth);
  return (
    
    <div className="page-wrapper">
             
            { auth!==null?<Header/>:""}
             {/*{auth!==null?<Header/>:<Registration/>}*/}
              <div className="page-body-wrapper">             
    <BrowserRouter>
         
      
        <Routes>
        
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route exact path="/login" element={<Login/>} /> */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/maincategory" element={<Maincategory/>} />
          <Route path="/mainsubcategory" element={<Mainsubcategory/>} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          
        </Routes>
      
    </BrowserRouter>
    </div>
    </div>
  );
};

export default App;