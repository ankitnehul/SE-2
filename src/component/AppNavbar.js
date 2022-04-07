import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import { Redirect, Link } from "react-router-dom";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
      role: "",
    };
  }
  handleRedirect = () => {
    this.setState({ redirectHome: true });
  };

  logout = () => {
    localStorage.clear();
    this.setState({ redirectHome: true });
  };
  home = () => {
    let role = localStorage.getItem("role");
    console.log(role);
    this.setState({
      role: role,
    });
  };

  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Banking System</a>
            </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">About us</a></li>
    </ul>
  </div>
</nav>
      </div>
    );
  }
}

export default AppNavbar;
