/* import React from 'react';
import { Component } from 'react';
import {  Link } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Login from './components/Login';

 class Header extends Component {
    render() {
      {/*const auth = localStorage.getItem('user');
       const logout = () => {
         localStorage.clear();
         window.location("http://localhost:3001/login");
       */
//         return (
//             <div>
//               <div className="wrapper">
//                 {/* Preloader */}
//                 <div className="preloader flex-column justify-content-center align-items-center">
//                     <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
//                 </div>
//                 {/* Navbar */}
//                 <nav className="main-header navbar navbar-expand navbar-white navbar-light">
//                     {/* Left navbar links */}
//                     <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <Link className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></Link>
//                     </li>
//                     <li className="nav-item d-none d-sm-inline-block">
//                         <Link href="index3.html" className="nav-link">Home</Link>
//                     </li>
//                     <li className="nav-item d-none d-sm-inline-block">
//                         <Link href="#" className="nav-link">Contact</Link>
//                     </li>
//                     </ul>
//                     {/* Right navbar links */}
//                     <ul className="navbar-nav ml-auto">
//                     {/* Navbar Search */}
//                     <li className="nav-item">
//                         <Link className="nav-link" data-widget="navbar-search" href="#" role="button">
//                         <i className="fas fa-search" />
//                         </Link>
//                         <div className="navbar-search-block">
//                         <form className="form-inline">
//                             <div className="input-group input-group-sm">
//                             <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
//                             <div className="input-group-append">
//                                 <button className="btn btn-navbar" type="submit">
//                                 <i className="fas fa-search" />
//                                 </button>
//                                 <button className="btn btn-navbar" type="button" data-widget="navbar-search">
//                                 <i className="fas fa-times" />
//                                 </button>
//                             </div>
//                             </div>
//                         </form>
//                         </div>
//                     </li>
//                     {/* Messages Dropdown Menu */}
//                     <li className="nav-item dropdown">
//                         <Link className="nav-link" data-toggle="dropdown" href="#">
//                         <i className="far fa-comments" />
//                         <span className="badge badge-danger navbar-badge">3</span>
//                         </Link>
//                         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//                         <Link href="#" className="dropdown-item">
//                             {/* Message Start */}
//                             <div className="media">
//                             <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
//                             <div className="media-body">
//                                 <h3 className="dropdown-item-title">
//                                 Brad Diesel
//                                 <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
//                                 </h3>
//                                 <p className="text-sm">Call me whenever you can...</p>
//                                 <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
//                             </div>
//                             </div>
//                             {/* Message End */}
//                         </Link>
//                         <div className="dropdown-divider" />
//                         <Link href="#" className="dropdown-item">
//                             {/* Message Start */}
//                             <div className="media">
//                             <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
//                             <div className="media-body">
//                                 <h3 className="dropdown-item-title">
//                                 John Pierce
//                                 <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
//                                 </h3>
//                                 <p className="text-sm">I got your message bro</p>
//                                 <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
//                             </div>
//                             </div>
//                             {/* Message End */}
//                         </Link>
//                         <div className="dropdown-divider" />
//                         <Link href="#" className="dropdown-item">
//                             {/* Message Start */}
//                             <div className="media">
//                             <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
//                             <div className="media-body">
//                                 <h3 className="dropdown-item-title">
//                                 Nora Silvester
//                                 <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
//                                 </h3>
//                                 <p className="text-sm">The subject goes here</p>
//                                 <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
//                             </div>
//                             </div>
//                             {/* Message End */}
//                         </Link>
//                         <div className="dropdown-divider" />
//                         <Link href="#" className="dropdown-item dropdown-footer">See All Messages</Link>
//                         </div>
//                     </li>
//                     {/* Notifications Dropdown Menu */}
//                     <li className="nav-item dropdown">
//                         <Link className="nav-link" data-toggle="dropdown" href="#">
//                         <i className="far fa-bell" />
//                         <span className="badge badge-warning navbar-badge">15</span>
//                         </Link>
//                         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//                         <span className="dropdown-item dropdown-header">15 Notifications</span>
//                         <div className="dropdown-divider" />
//                         <Link href="#" className="dropdown-item">
//                             <i className="fas fa-envelope mr-2" /> 4 new messages
//                             <span className="float-right text-muted text-sm">3 mins</span>
//                         </Link>
//                         <div className="dropdown-divider" />
//                         <Link href="#" className="dropdown-item">
//                             <i className="fas fa-users mr-2" /> 8 friend requests
//                             <span className="float-right text-muted text-sm">12 hours</span>
//                         </Link>
//                         <div className="dropdown-divider" />
//                         <Link href="#" className="dropdown-item">
//                             <i className="fas fa-file mr-2" /> 3 new reports
//                             <span className="float-right text-muted text-sm">2 days</span>
//                         </Link>
//                         <div className="dropdown-divider" />
//                         <Link href="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
//                         </div>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" data-widget="fullscreen" href="#" role="button">
//                         <i className="fas fa-expand-arrows-alt" />
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
//                         <i className="fas fa-th-large" />
//                         </Link>
//                     </li>
//                     </ul>
//                 </nav>
//                 {/* /.navbar */}
//                 {/* Main Sidebar Container */}
//                 <Sidebar/>
//                 {/* Content Wrapper. Contains page content */}
//                 <div className="content-wrapper">
//                     {/* Content Header (Page header) */}
//                     <div className="content-header">
//                     <div className="container-fluid">
//                         <div className="row mb-2">
//                         <div className="col-sm-6">
//                             <h1 className="m-0">Dashboard</h1>
//                         </div>{/* /.col */}
//                         <div className="col-sm-6">
//                             <ol className="breadcrumb float-sm-right">
//                             <li className="breadcrumb-item"><Link href="#">Home</Link></li>
//                             <li className="breadcrumb-item active">Dashboard v1</li>
//                             </ol>
//                         </div>{/* /.col */}
//                         </div>{/* /.row */}
//                     </div>{/* /.container-fluid */}
//                     </div>
//                     {/* /.content-header */}
//                     {/* Main content */}
//                     <section className="content">
//                     <div className="container-fluid">
//                         {/* Small boxes (Stat box) */}
//                         <div className="row">
//                         <div className="col-lg-3 col-6">
//                             {/* small box */}
//                             <div className="small-box bg-info">
//                             <div className="inner">
//                                 <h3>150</h3>
//                                 <p>New Orders</p>
//                             </div>
//                             <div className="icon">
//                                 <i className="ion ion-bag" />
//                             </div>
//                             <Link href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
//                             </div>
//                         </div>
//                         {/* ./col */}
//                         <div className="col-lg-3 col-6">
//                             {/* small box */}
//                             <div className="small-box bg-success">
//                             <div className="inner">
//                                 <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
//                                 <p>Bounce Rate</p>
//                             </div>
//                             <div className="icon">
//                                 <i className="ion ion-stats-bars" />
//                             </div>
//                             <Link href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
//                             </div>
//                         </div>
//                         {/* ./col */}
//                         <div className="col-lg-3 col-6">
//                             {/* small box */}
//                             <div className="small-box bg-warning">
//                             <div className="inner">
//                                 <h3>44</h3>
//                                 <p>User Registrations</p>
//                             </div>
//                             <div className="icon">
//                                 <i className="ion ion-person-add" />
//                             </div>
//                             <Link href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
//                             </div>
//                         </div>
//                         {/* ./col */}
//                         <div className="col-lg-3 col-6">
//                             {/* small box */}
//                             <div className="small-box bg-danger">
//                             <div className="inner">
//                                 <h3>65</h3>
//                                 <p>Unique Visitors</p>
//                             </div>
//                             <div className="icon">
//                                 <i className="ion ion-pie-graph" />
//                             </div>
//                             <Link href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
//                             </div>
//                         </div>
//                         {/* ./col */}
//                         </div>
//                         {/* /.row */}
//                         {/* Main row */}
                        
//                         {/* /.row (main row) */}
//                     </div>{/* /.container-fluid */}
//                     </section>
//                     {/* /.content */}
//                 </div>
//                 {/* /.content-wrapper */}
//                 <footer className="main-footer">
//                     <strong>Copyright © 2014-2021 <Link href="https://adminlte.io">AdminLTE.io</Link>.</strong>
//                     All rights reserved.
//                     <div className="float-right d-none d-sm-inline-block">
//                     <b>Version</b> 3.2.0
//                     </div>
//                 </footer>
//                 {/* Control Sidebar */}
//                 <aside className="control-sidebar control-sidebar-dark">
//                     {/* Control sidebar content goes here */}
//                 </aside>
//                 {/* /.control-sidebar */}
//                 </div>


//  </div>
  /*          
            <>
            <h1>hello</h1>
          <Sidebar></Sidebar> 
          
            </>
            );
    }
}

export default Header;

*/
import React from 'react';
import { Component } from 'react';
import {  Link } from "react-router-dom";
// import Sidebar from './Sidebar';
import Sidebar from './components/Sidebar';

class Header extends Component {
    render() {
      const auth = localStorage.getItem('user');
      const logout = () => {
        localStorage.clear();
        window.location("http://localhost:3001/login");
    }
        return (
        <div>
         <div className="page-wrapper">
           <div className="page-main-header">
           <div className="main-header-right row">
            <div className="main-header-left d-lg-none">
              <div className="logo-wrapper"><Link to=""><img className="blur-up lazyloaded" src="./images/CSNS_logo2.png"  style={{width: 179, height: 79}} alt="tlogo"/></Link>				
              </div>
            </div>
      {/*<div class="mobile-sidebar">
      <div class="media-body text-right switch-sm">
          <label class="switch"><a href="javascript:void(0);"><i id="sidebar-toggle" data-feather="align-left"></i></a></label>
      </div>
  </div>*/}
           <div className="nav-right col">
             <ul className="nav-menus">
          {/* <li>
              <form class="form-inline search-form">
                  <div class="form-group">
                      <input class="form-control-plaintext" type="search" placeholder="Search.."><span class="d-sm-none mobile-search"><i data-feather="search"></i></span>
                  </div>
              </form>
          </li>
          <li><a class="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><i data-feather="maximize-2"></i></a></li>
          <li class="onhover-dropdown"><a class="txt-dark" href="#">
              <h6>EN</h6></a>
              <ul class="language-dropdown onhover-show-div p-20">
                  <li><a href="#" data-lng="en"><i class="flag-icon flag-icon-is"></i> English</a></li>
                  <li><a href="#" data-lng="es"><i class="flag-icon flag-icon-um"></i> Spanish</a></li>
                  <li><a href="#" data-lng="pt"><i class="flag-icon flag-icon-uy"></i> Portuguese</a></li>
                  <li><a href="#" data-lng="fr"><i class="flag-icon flag-icon-nz"></i> French</a></li>
              </ul>
          </li> */}
             <li className="onhover-dropdown"><i data-feather="bell" /><span className="badge badge-pill badge-primary pull-right notification-badge" id="noticount">0</span><span className="dot" />
               <ul className="notification-dropdown onhover-show-div p-0" id="notification_div">
              {/* <li>Notification <span class="badge badge-pill badge-primary pull-right"></span></li>
                   */}
              {/* <li class="txt-dark"><a href="#">All</a> notification</li> */}
            </ul>
          </li>
          <li style={{display: 'none'}}><Link to=""><i className="right_side_toggle" data-feather="message-square" /><span className="dot" /></Link></li>
          <li className="onhover-dropdown">
            <div className="media align-items-center"><img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" alt='logo' src="./images/CSNS_logo2.png" style={{width: 399, height: 50}}/>
              {/*<div class="dotted-animation"><span class="animate-circle"></span><span class="main-circle"></span></div>*/}
            </div>
            <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
              <li><Link to=""><i data-feather="user" />Update Profile</Link></li>
              {/*<li><a href="#"><i data-feather="mail"></i>Inbox</a></li>
                  <li><a href="#"><i data-feather="lock"></i>Lock Screen</a></li>
                  <li><a href="#"><i data-feather="settings"></i>Settings</a></li>*/}
              <li>{auth?<Link className="sidebar-header" onClick={logout} to="/login">Logout ({ JSON.parse(auth).name}) </Link>:""}</li>
            </ul>
          </li>
        </ul>
        <div className="d-lg-none mobile-toggle pull-right"><i data-feather="more-horizontal" /></div>
      </div>
    </div>
  </div>
  <div className="page-body-wrapper">
  <Sidebar/>
  </div></div>

            </div>
        );
    }
}

export default Header;