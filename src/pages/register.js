import React, { Component } from "react";
import "./CustomerLogin.css";
import { BACKEND_URL } from "../config";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      middleName: "",
      address: "",
      mobileNo: "",
      gender: "",
      dob: "",
    };
  }

  register = () => {
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleName: this.state.middleName,
      address: this.state.address,
      mobileNo: this.state.mobileNo,
      gender: this.state.gender,
      dob: this.state.dob,
    };

    axios
      .post(BACKEND_URL + "api/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleMiddleName = (e) => {
    this.setState({ middleName: e.target.value });
  };

  handleLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  handleaddress = (e) => {
    this.setState({ address: e.target.value });
  };

  handlegender = (e) => {
    this.setState({ gender: e.target.value });
  };

  handledob = (e) => {
    this.setState({ dob: e.target.value });
  };

  handlemobileNO = (e) => {
    this.setState({ mobileNo: e.target.value });
  };

  render() {
    return (
      <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 class="text-center">Register</h2>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              required="required"
              onChange={this.firstName}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Middle name"
              required="required"
              onChange={this.middleName}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              required="required"
              onChange={this.lastName}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Address"
              required="required"
              onChange={this.address}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Mobile no"
              required="required"
              onChange={this.mobileNo}
            />
          </div>
          <div class="form-group">
            <select
              type="password"
              class="form-control"
              placeholder="Gender"
              required="required"
              onChange={this.gender}
            >
              <option value="">Choose</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div class="form-group">
            <input
              type="date"
              class="form-control"
              required="required"
              onChange={this.dob}
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
