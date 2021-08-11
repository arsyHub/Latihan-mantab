import React from "react";
import "../Style/CrHeader.css";
import Dashbor from "./Dashbor";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Barang from "./Barang";
import UseBarang from "./UseBarang";
import UpdateBarang from "./UpdateBarang";

// import { Carousel } from "bootstrap";

const CrHeader = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="/">
              Astronout
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <Link to="/Dashbor" className="nav-link ">
                  Dashboard
                </Link>

                <Link to="/Barang" className="nav-link ">
                  Barang
                </Link>

                <a className="nav-link" href="/">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Akhir Navbar */}
        <Route path="/Dashbor" component={Dashbor} />
        <Route path="/Barang" component={UseBarang} />
        <Route path="/UpdateBarang/:id" component={UpdateBarang} />
      </div>
    </Router>
  );
};

export default CrHeader;
