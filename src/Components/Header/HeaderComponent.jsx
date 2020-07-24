import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.scss";

const HeaderComponent = (props) => {
  return (
    <div className="row gkp-header">
      <Navbar bg="light" expand="lg">
        <div className="col-sm-3 gkp-header-items gkp-header--projects">
          <Navbar.Brand className="gkp-header--text" href="#home">Home</Navbar.Brand>
        </div>
        <div className="col-sm-3 gkp-header-items gkp-header--about">
          <Nav.Link className="gkp-header--text" href="/">Projects</Nav.Link>
        </div>
        <div className="col-sm-3 gkp-header-items gkp-header--contact">
          <div className="gkp-header--text">Blog</div>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
