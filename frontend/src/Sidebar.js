import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "./images/CSNS_logo2.png";
class Sidebar extends Component {
    
    render() {

        
        return (
            <div>
                    <div className="page-sidebar" style={{width: 270}}>
                        <div className="main-header-left d-none d-lg-block">
                            <div className="logo-wrapper">
                                <Link to="/dashboard">
                                    <img className="blur-up lazyloaded" src={Logo} alt="logo" style={{height:"50px", marginLeft:"20px",width:"130px"}} />
                                </Link>
                            </div>
                        </div>
                        <div className="sidebar custom-scrollbar">
                            <ul className="sidebar-menu">
                            
                                    <li  className="  nav-expanded nav-active">
                                            <Link className="sidebar-header" to="/maincategory">Main Category</Link>
                                            <Link className="sidebar-header" to="/mainsubcategory">Main Subcategory</Link>
                                            <Link className="sidebar-header" to="/services">Services</Link>
                                            <Link className="sidebar-header" to="/servicepackages">Service Packages</Link>                                                  
                                            <Link className="sidebar-header" to="/banner">Banner</Link>
                                            <Link className="sidebar-header" to="/bannerdetails">Banner Details</Link>
                                             {/* <Link className="sidebar-header" to="/meeting">Meeting</Link>
                                             <Link className="sidebar-header" to="/requirement">Requirement</Link> */}
                                            {/* <Link className="sidebar-header" to="/branch">Branch</Link>
                                            <Link className="sidebar-header" to="/department">Department</Link>
                                            <Link className="sidebar-header" to="/employee">Employee</Link>
                                            <Link className="sidebar-header" to="/user">User</Link>
                                            <Link className="sidebar-header" to="/quotation">Quotation</Link>
                                            
                                            <Link className="sidebar-header" to="/requirementdetails">Requirement_Details</Link>
                                            <Link className="sidebar-header" to="/reminder">Reminder</Link> */}
                                    </li>
                            </ul>
                        </div>
                    </div>
                       
            </div>
        );
    }
}

export default Sidebar;