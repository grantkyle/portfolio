import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.scss";

const HeaderComponent = (props) => {
  return (
    <div className="row gkp-header">
      <Navbar bg="light" expand="lg">
        <div className="col-4 gkp-header-items">
          <Navbar.Brand className="gkp-header--text" href="#home">Projects</Navbar.Brand>
        </div>
        <div className="col-4 gkp-header-items gkp-header--about">
          <Nav.Link className="gkp-header--text" href="/">About</Nav.Link>
        </div>
        <div className="col-4 gkp-header-items gkp-header--contact">
          <div className="gkp-header--text">Contact</div>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
