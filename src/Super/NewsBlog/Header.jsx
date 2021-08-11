import React, { Component } from "react";
import NewsBlog from "./NewsBlog";
import "./NewsBlog.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./Contact";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          {/* Top Header */}
          <div className="top-header py-4">
            <div className="container">
              <h1 className="txLogo">
                WEB <span> NEWS</span>
              </h1>
              <div className="">{/* <marquee className="">welcome to web news, get the latest and most popular information here https://webnews.co.id don't miss the latest news from us</marquee> */}</div>
            </div>
          </div>

          {/* Navbar */}
          <div className="navbar sticky-top navbar-expand-lg navbar-dark bg-danger bg-gradient">
            <div className="container">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/NewsBlog" className="nav-link">
                    Home
                  </Link>
                  <a href="/" className="nav-link">
                    Blog
                  </a>
                  <a href="/" className="nav-link">
                    Article
                  </a>
                  <a href="/" className="nav-link">
                    FAQ's
                  </a>
                  <Link to="/Contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <NewsBlog /> */}
          <Route path="/NewsBlog" component={NewsBlog} />
          <Route path="/Contact" component={Contact} />
        </React.Fragment>
        {/* <NewsBlog /> */}
      </Router>
    );
  }
}
