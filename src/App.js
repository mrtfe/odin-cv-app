import React, { Component } from "react";
import { GeneralInformation } from "./components/GeneralInformation";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { GeneralExample } from "./components/GeneralExample";
import "./App.css";

class App extends Component {
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
        <h1>CV GENERATOR</h1>
        <div className="wrapper">
          <div>
            <GeneralInformation />
            <Education />
            <Experience />
          </div>
          <div>
            <GeneralExample
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              phoneNumber={this.state.phoneNumber}
            />
          </div>
        </div>
        <button
          onClick={() => {
            console.log(this.state.firstName);
          }}
        >
          TEST
        </button>
      </>
    );
  }
}

export default App;
