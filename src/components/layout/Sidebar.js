import React, { Component } from "react";
import "./App.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="sidebar" id="sidebar">
          <div className="sidebar-header">
            <h2>Welcome to Job Listings</h2>
          </div>

          <ul className="list-styled-components">
            <p>My dashboard</p>
            {/* 
            <li className="active">
              <a href="#" id="nav-list">
                <i class="fa fa-fw fa-search"></i> View Listings
              </a>
            </li> */}

            <li className="active">
              <a href="#" id="nav-list">
                Latest Jobs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
