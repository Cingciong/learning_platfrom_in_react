import React from 'react';

export default class MyNavbar extends React.Component {
    render (){
      return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">E-learning platform</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/browse">All Courses<span className="material-symbols-outlined"> dataset </span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Sign Up<span className="material-symbols-outlined"> login </span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Sign In<span className="material-symbols-outlined"> login </span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/panel">User Panel<span className="material-symbols-outlined"> account_circle </span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin">Admin Panel<span className="material-symbols-outlined"> admin_panel_settings </span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/courses">Your Courses<span className="material-symbols-outlined"> golf_course </span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/api/logout">Logout<span className="material-symbols-outlined"> logout </span></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div> )
    }
};
    