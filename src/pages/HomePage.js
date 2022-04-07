import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./HomePage.css";
import AppNavbar from "../component/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

class HomePage extends Component {
  customer = () => {
    this.props.history.push("/CustomerLogin");
  };
  admin = () => {
    this.props.history.push("/AdminLogin");
  };
  render() {
    return (
      <div>
        <div className="bg-light">
          <div className="input">
            <h1 className="header">
              BANK
              <br />
              MANAGEMENT
              <br />
              SYSTEM
            </h1>
            <br />
            <button class="btn btn-outline-dark" onClick={this.customer}>
              Customer
            </button>
            <button class="btn btn-outline-dark" onClick={this.admin}>
              Admin
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
