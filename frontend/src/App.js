import React from 'react';
import './App.css';
import Header from './Header';
import PrivateComponent from './PrivateComponent';

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './Login';
import Maincategory from './components/maincategory/Maincategory';

function App() {
  const auth = localStorage.getItem('user');
  console.warn(auth);
  return (
    <div className="page-wrapper">
      
     { auth!==null?<Header/>:<Login/>}
      <BrowserRouter>
        <Routes>

          <Route element={<PrivateComponent />}>

            <Route path="maincategory" element={<Maincategory />} />

          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
