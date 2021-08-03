import React, { Component } from 'react'

export default function menu (props) {
    return (
    <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
            <img src="dist/img/bflogo.png" alt="BF Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">Bug Follower</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
                </div>
            </div>
            
            {/* Sidebar Menu */}
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                
                <li className="nav-item">
                    <a onClick={()=>{props.setPageValue(props.pages[0])}} className="nav-link">
                    <i className="nav-icon far fa-calendar-alt" />
                    <p>
                        All Issues
                    </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a onClick={()=>{props.setPageValue(props.pages[1])}} className="nav-link">
                    <i className="nav-icon far fa-image" />
                    <p>
                        Open Issues
                    </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a onClick={()=>{props.setPageValue(props.pages[2])}} className="nav-link">
                    <i className="nav-icon fas fa-columns" />
                    <p>
                        Read Issues
                    </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                        View Recently
                    </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-book" />
                    <p>
                        Updated Recently
                    </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon far fa-plus-square" />
                    <p>
                        Resolved Recently
                    </p>
                    </a>
                </li>
                </ul>
            </nav>
            {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
        </div>

    )
    
}