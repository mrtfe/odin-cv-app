import React, { Component } from "react";
import "../styles/formStyle.css";

export class GeneralInformation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: this.firstName,
  //     lastName: this.lastName,
  //     email: this.email,
  //     phoneNumber: this.phoneNumber,
  //   };
  // }
  render() {
    return (
      <>
        <form>
          <h3>General Information</h3>
          <div>
            <input
              placeholder="First name"
              type="text"
              required
              value={this.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="Last name"
              type="text"
              required
              value={this.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="Email"
              type="email"
              required
              value={this.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="Phone number"
              type="number"
              required
              value={this.phoneNumber}
              onChange={(e) => this.setState({ phoneNumber: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
        </form>
        {/* <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <p>{this.state.phoneNumber}</p> */}
      </>
    );
  }
}
