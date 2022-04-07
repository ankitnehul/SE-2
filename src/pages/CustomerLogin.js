import React, { Component } from "react";
import ReactNotification, { store } from "react-notifications-component";
import "./CustomerLogin.css";
import axios from "axios";
import { Redirect } from "react-router";
import { BACKEND_URL } from "../config";
import { Link } from "react-router-dom";

class CustomerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
    };
  }

  login = () => {
    const data = {
      name: this.state.name,
      pass: this.state.pass,
    };
    console.log(data);
    axios
      .post(BACKEND_URL + "/api/login", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("userId", this.state.pass);
          localStorage.setItem("userName", this.state.name);
          localStorage.setItem("role", "customer");
        }
      })
      .catch((e) => {
        store.addNotification({
          title: "Error",
          message: "Try again",
          type: "danger",
          container: "bottom-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 3000,
          },
        });
      });
  };

  handlename = (e) => {
    this.setState({ name: e.target.value });
  };

  handlepass = (e) => {
    this.setState({ pass: e.target.value });
  };

  render() {
    return (
      <div class="login">
        <div class="login-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <h2 class="text-center">Log in</h2>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                required="required"
                onChange={this.handlename}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required="required"
                onChange={this.handlepass}
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Log in
              </button>
            </div>
            <Link to="/register">
              <div class="form-group">
                <button class="btn btn-primary btn-block">Register now</button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default CustomerLogin;
