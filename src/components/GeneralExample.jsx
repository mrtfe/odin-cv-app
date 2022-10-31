import React, { Component } from "react";
import "../styles/exampleStyle.css";

export class GeneralExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
    };
  }
  render() {
    return (
      <>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <p>{this.state.phoneNumber}</p>
      </>
    );
  }
}
