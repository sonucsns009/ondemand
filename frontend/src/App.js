import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Maincategory from './components/maincategory/Maincategory';
import AddMainCategory from './components/maincategory/AddMainCategory';

import Dashboard from './components/admin/Dashboard';
import PrivateComponent from './PrivateComponent';
import EditMainCategory from './components/maincategory/EditMainCategory';

function App() {
  const auth = localStorage.getItem('user');
  return (
    <div className="page-wrapper">
      {  auth ? <Header />:<Login />}
       <div class="page-body-wrapper">
         
        <Routes>
          
         <Route element={<PrivateComponent />}>
         
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/maincategory" element={<Maincategory/>} />
          <Route path="/addmaincategory" element={<AddMainCategory/>} />
          <Route path="/editmaincategory/:id" element={<EditMainCategory/>} />
          
        </Route>
       
        </Routes>
       </div>
     </div>
  );
}

export default App;
