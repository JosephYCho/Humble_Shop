import React from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../../assets/Assets/logo.png";

class Hero extends React.Component {
  render() {
    return (
      <div id="hero-container">
        <header>
          <Navbar>
            <Container className="navbar">
              <div className="nav-left">
                <img src={logo} alt="Simpatra" />
              </div>

              <div className="nav-right">
                <ul className="nav-items">
                  <NavItem>
                    <NavLink className="text-dark nav-item" to="/toppings">
                      <a href="#" >Feature</a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-dark" to="/toppings">
                      <a href="#">Pricing</a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-dark" to="/toppings">
                      <a href="#">Your Cart</a>
                    </NavLink>
                  </NavItem>
                </ul>
              </div>
            </Container>
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
