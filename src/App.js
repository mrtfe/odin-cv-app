import React, { Component } from "react";
import { GeneralInformation } from "./components/GeneralInformation";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { GeneralExample } from "./components/GeneralExample";
import { useState } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // const [cvDetails, setCvDetails] = useState(initialState);
    const initialState = {
      generalInformation: [
        {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        },
      ],
      education: [
        {
          schoolName: "",
          studyName: "",
          dateFrom: "",
          dateTo: "",
        },
      ],
      experience: [
        {
          companyName: "",
          positionTitle: "",
          tasks: "",
          from: "",
          to: "",
        },
      ],
    };

    const handleSubmit = () => {};
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
            <GeneralExample />
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
