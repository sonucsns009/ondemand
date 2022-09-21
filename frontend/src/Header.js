import React from 'react';
import { Component } from 'react';
import {  Link } from "react-router-dom";
import Sidebar from './Sidebar';

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
                          <div className="logo-wrapper"><Link to=""><img className="blur-up lazyloaded" src="./images/manager.png"  style={{width: 179, height: 79}} alt="tlogo"/></Link>
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
                            {/* <li className="onhover-dropdown"><i data-feather="bell" /><span className="badge badge-pill badge-primary pull-right notification-badge" id="noticount">0</span><span className="dot" />
                              <ul className="notification-dropdown onhover-show-div p-0" id="notification_div">
                                <li>Notification <span class="badge badge-pill badge-primary pull-right"></span></li>
                                    
                                <li class="txt-dark"><a href="#">All</a> notification</li>
                              </ul>
                            </li> */}
                            <li style={{display: 'none'}}><Link to=""><i className="right_side_toggle" data-feather="message-square" /><span className="dot" /></Link></li>
                            <li className="onhover-dropdown">
                              <div className="media align-items-center"><img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" alt='logo' src="./uploads/flaticon/manager.png" style={{width: 399, height: 50}}/>
                                {/*<div class="dotted-animation"><span class="animate-circle"></span><span class="main-circle"></span></div>*/}
                              </div>
                              <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                {/* <li><Link to=""><i data-feather="user" />Update Profile</Link></li> */}
                                {/*<li><a href="#"><i data-feather="mail"></i>Inbox</a></li>
                                    <li><a href="#"><i data-feather="lock"></i>Lock Screen</a></li>
                                    <li><a href="#"><i data-feather="settings"></i>Settings</a></li>*/}
                                <li>{auth?<Link className="sidebar-header" onClick={logout} to="/login">Logout 
                                {/* ({ JSON.parse(auth).name}) */}
                                </Link>:""}</li>
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