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

import Mainsubcategory from './components/mainsubcategory/Mainsubcategory';
import AddMainSubCategory from './components/mainsubcategory/AddMainSubCategory';
import EditMainSubCategory from './components/mainsubcategory/EditMainSubCategory';
import Services from './components/services/Services';
import AddServices from './components/services/addservices';
import EditServices from './components/services/editservices';
import ServicePackages from './components/servicePackages/ServicePackage';
import AddservicePackages from './components/servicePackages/AddServicePackages';
import EditServicePackages from './components/servicePackages/EditServicePackages';

import Banner from './components/Banner/banner';
import AddBanner from './components/Banner/addBanner';
import EditBanner from './components/Banner/EditBanner';
import BannerDetails from './components/BannerDetails/bannerdetails';
import AddBannerDetails from './components/BannerDetails/AddBannerdetails';
import EditBannerDetails from './components/BannerDetails/EditBannerdetails';
import ServiceTax from './components/Tax/servicetax';
import EditServiceTax from './components/Tax/editservicetax';
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
          <Route path="/mainsubcategory" element={<Mainsubcategory/>} />
          <Route path="/addmainsubcategory" element={<AddMainSubCategory/>} />
          <Route path="/editmainsubcategory/:id" element={<EditMainSubCategory/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/addservices" element={<AddServices/>}/>
          <Route path="/editservices/:id" element={<EditServices/>}/>
          <Route path="/servicepackages" element={<ServicePackages/>}/>
          <Route path="/addservicePackages" element={<AddservicePackages/>}/>
          <Route path="/editservicePackages/:id" element={<EditServicePackages/>}/>
          <Route path="/banner" element={<Banner/>}/>
          <Route path="/AddBanner" element={<AddBanner/>}/>
          <Route path="/editBanner/:id" element={<EditBanner/>}/>
          <Route path="/bannerdetails" element={<BannerDetails/>}/>
          <Route path="/addBannerDetails" element={<AddBannerDetails/>}/>
          <Route path="/editbannerdetails/:id" element={<EditBannerDetails/>}/>
          <Route path="/servicetax" element={<ServiceTax/>}/>
          <Route path="/editservicetax/:id" element={<EditServiceTax/>}/>
        </Route>
       
        </Routes>
       </div>
     </div>
  );
}

export default App;
