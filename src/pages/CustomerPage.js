import React, { Component } from "react";
import "./CustomerPage.css"
import axios from "axios";



class CustomerPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      transaction: [],
    }
  }

  transaction = (e) => {

    axios({
      method: "get",
      url: "http://localhost:5000/customer/getlocnames",
    })
      .then((res) => {
        console.log(res);
        this.setState({
          transaction: res.data.data,
        });
        console.log(this.transaction)
      })
  }

    render() {
        return (
          <div>
              <div class="logo">
                  <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="logo"></img>
              </div>
              <div class="button">
              <button class="btn btn-outline-dark" onClick={this.customer}>
              Profile
            </button>
            </div>
            <div class="button">
              <button class="btn btn-outline-dark" onClick={this.customer}>
              Transfer Fund
            </button>
            </div>
            <div class="button">
            <button class="btn btn-outline-dark" onClick={this.transaction}>
              Transaction history
            </button>
            </div>
            </div>
        )};
    
}

export default CustomerPage;