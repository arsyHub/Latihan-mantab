import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import about from "./about";
import contact from "./contact";
import "./home.css";
// import Link from "next/link";

const home = () => {
  return (
    <Router>
      <strong>Routing halaman</strong>
      <hr />
      <Link to="/A">
        <button className="btn btn-primary mt-4">Home</button>
      </Link>
      {/* <Link href="/about">klik</Link> */}
      <Link to="/C">
        <button className="btn btn-primary mt-4">Gallery</button>
      </Link>
      <div className="konten">
        <Route path="/A" component={about} />
        <Route path="/C" component={contact} />
      </div>
    </Router>
  );
};

export default home;
