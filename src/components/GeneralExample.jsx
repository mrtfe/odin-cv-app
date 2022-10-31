import React, { Component } from "react";
import "../styles/exampleStyle.css";

export class GeneralExample extends Component {
  // constructor(props) {
  //   super();
  // }
  render() {
    return (
      <>
        <p>{this.props.firstName}</p>
        <p>{this.props.lastName}</p>
        <p>{this.props.email}</p>
        <p>{this.props.phoneNumber}</p>
      </>
    );
  }
}
