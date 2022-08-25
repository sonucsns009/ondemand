import React from 'react';
import { Component } from 'react';
//import { Link } from "react-router-dom";
class Sidebar extends Component {
    
    render() {

        
        return (
            <div>
                   <aside className="main-sidebar sidebar-dark-primary elevation-4">
                            {/* Brand Logo */}
                            <a href="index3.html" className="brand-link">
                            <img src={require('./dist/CSNS_logo2.png')} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"  style={{height:"150px", marginLeft:"20px",width:"170px"}}/>
                            <span className="brand-text font-weight-light"> &nbsp;</span>
                            </a>
                            {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user panel (optional) */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    <img src="dist/img/user2-160x160.jpg"  alt="User Image" />
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block">Alexander Pierce</a>
                                </div>
                            </div>
                            {/* SidebarSearch Form */}
                            <div className="form-inline">
                                <div className="input-group" data-widget="sidebar-search">
                                     <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar Menu */}
                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
                                with font-awesome or any other icon font library */}
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Dashboard v1</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Main Category</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Main Sub Category</p>
                                        </a>
                                    </li>
                               
                                </ul>
                            </nav>
                            {/* /.sidebar-menu */}
                        </div>
                            {/* /.sidebar */}
                    </aside>
                       
            </div>
        );
    }
}

export default Sidebar;