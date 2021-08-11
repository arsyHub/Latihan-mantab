import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import "./AllComponent.css";
import Logo from "./img/logo.png";
import Jam from "./img/employee.png";
import Jam2 from "./img/hires.png";
import Jam3 from "./img/security.png";
import PhotoP from "./img/profil.jpg";

export default class AllComponent extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar expand="lg" id="navb">
          <Container>
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="logo" />
              ARSY BERLIAN
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#article">Article</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <a href="#join" className="btn btn-warning tombol">
                  Join Us
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* Akhir Navbar */}

        {/* Jumbotron */}
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">
              Get work done <span>faster</span>
              <br /> and <span>better</span> with us
            </h1>
            <a href="/" className="btn btn-warning tombol">
              Our Work
            </a>
          </div>
        </div>
        {/* Akhir Jumbotron */}

        {/* Container */}
        <div className="container">
          {/* info panel */}
          <div className="row justify-content-center">
            <div className="col-10 info-panel">
              <div className="row">
                <div className="col-lg">
                  <img src={Jam} alt="Employee" className="float-start" />
                  <h4>24 Hours</h4>
                  <p>Lorem ipsum dolor sit amet, dolor sit amet.</p>
                </div>
                <div className="col-lg">
                  <img src={Jam2} alt="Employee" className="float-start" />
                  <h4>High-Res</h4>
                  <p>Lorem ipsum dolor sit amet, dolor sit amet.</p>
                </div>
                <div className="col-lg">
                  <img src={Jam3} alt="Employee" className="float-start" />
                  <h4>Security</h4>
                  <p>Lorem ipsum dolor sit amet, dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          {/* akhir info panel */}
        </div>
        {/* Akhir Container */}

        {/* My profile */}
        <div className="container konten">
          <h3 className="txtprofil text-center">My Profile</h3>

          <div className="row">
            <div className="col-lg bg-warning">
              <img src={PhotoP} className="img-fluid profil" alt="Profil" />
              {/* <h3>Arsy Berlian Adnin</h3> */}
            </div>
            <div className="col-lg-3 bg-warning">
              <h1 className="mb-90 pt-5">Arsy Berlian Adnin</h1>
              <p>Mahasiswa | Informatika</p> <br />
              <br />
              <br />
              <h5>Karang Sari, 02 June 2000</h5>
              <h6>Za. Pagar Alam, Kedaton, Bandar Lampung</h6>
            </div>
            <div className="col-lg ">
              <h1 className="mb-90 text-center">Skills</h1>

              <h6>JavaScript</h6>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: "92%" }} />
              </div>
              <h6>CorelDraw</h6>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: "85%" }} />
              </div>
              <h6>C#</h6>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: "75%" }} />
              </div>
              <h6>Python</h6>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>
        {/* Akhir My Profile */}

        {/* Project create */}
        <div className="jumbotron jumbo-project">
          <div className="container konten2">
            <h3 className="text-center txtproject">Project Create</h3>

            <div className="row justify-content-center">
              <div className="col-lg-4 projek1 ">
                <div>
                  <h4>Website</h4>
                </div>
              </div>
              <div className="col-lg-4 projek2">
                <div>
                  <h4>Desktop</h4>
                </div>
              </div>
              <div className="col-lg-4 projek3">
                <div>
                  <h4>Android</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Akhir Project create */}

        <div className="up fixed-bottom me-auto p-2 ">
          <a href="#navb" className="btn btn-warning">
            ^
          </a>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
