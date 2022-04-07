import React, { Component } from "react";
import "./CustomerPage.css";

class AdminPage extends Component {
  render() {
    return (
      <div className="admin">
        <div class="logo">
          <img
            src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            alt="logo"
          ></img>
        </div>
        <h2>Admin</h2>
        <div class="button">
          
          <button class="btn btn-outline-dark" onClick={this.customer}>
            View Users
          </button>
        </div>
      </div>
    );
  }
}

export default AdminPage;
