import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "../../App.css"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <div className="fs-3 ubuntu navbar-nav">
                    Rick & Morty
                    <span className="text-primary">WiKi</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <style jsx>
                        {`
                          button[aria-expanded="false"] > .close{
                          display: none;
                          }
                          button[aria-expanded="true"] > .open{
                          display: none;
                          }
                        `}
                    </style>

                    <i className="fas fa-bars open fw-bold text-dark"></i>
                    <i className="fas fa-times close fw-bold text-dark"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5 fw-bold">
                        <NavLink activeClassName="active" to="/" className="nav-link" >Characters</NavLink>
                        <NavLink to="/episodes" className="nav-link" >Episodes</NavLink>
                        <NavLink to="/location" className="nav-link" >Location</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
