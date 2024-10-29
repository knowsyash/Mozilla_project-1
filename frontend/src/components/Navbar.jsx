import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">greBlogger</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/feed">Feed</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="navbarDropdown"
                  >
                    Dropdown
                  </Link>
                  <ul className={`dropdown-menu bg-${props.mode}`} aria-labelledby="navbarDropdown">
                    <li>
                      <Link className={`dropdown-item ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} to="#">
                        Apply for a Job
                      </Link>
                    </li>
                    <li>
                      <Link className={`dropdown-item ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} to="#">
                        Create Blogs
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <Link className={`dropdown-item ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} to="#">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Find Your Interest"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit" style={{ minWidth: "120px", minHeight: "40px" }}>
                  Log in
                </button>
              </form>
            </div>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </label>
          </div>
        </nav>
      </div>
    </>
  );
}
