import React from "react";
import {
  Container,
  Navbar,
  NavItem,
  Row
} from "reactstrap";
import logo from "../../assets/Assets/logo.png";

class Hero extends React.Component {
  render() {
    return (
      <div id="hero-container">
         
        <header>
          <Navbar>
            <div className="navbar">
              <div className="nav-left">
                <img src={logo} alt="Simpatra" />
              </div>

              <div className="nav-right">
                <ul className="nav-items">
                  <NavItem>
                      <a href="#" >Feature</a>
                  </NavItem>
                  <NavItem>
                      <a href="#">Pricing</a>
                  </NavItem>
                  <NavItem>
                      <a href="#">Your Cart</a>
                  </NavItem>
                </ul>
              </div>
            </div>
          </Navbar>
        </header>
        <div className="text-container">
          <h1>
            <span className="bold-font">Elevate </span>Your Practice{" "}
            <span className="bold-font"> Effectively</span>
          </h1>
          <h2>
            Add revenue to your practice. Utilize one platform and our
            technology to take your practice to the next level. Simpatra has
            created marketing tools and packages that work for you while you
            care for your patients.
          </h2>
        </div>
        
      </div>
    );
  }
}

export default Hero;
