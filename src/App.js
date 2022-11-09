import React, { useState } from "react";
import { GeneralInformation } from "./components/GeneralInformation";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { GeneralExample } from "./components/GeneralExample";
import "./App.css";

function App() {
  const initialState = {
    generalInformation: [
      {
        firstName: "Martynas",
        lastName: "Fetingis",
        email: "martynas.f@gmail.com",
        phoneNumber: "112",
      },
    ],
    education: [
      {
        schoolName: "Codeacademy",
        studyName: "Front-end",
        dateFrom: "2022-05",
        dateTo: "2022-12",
      },
    ],
    experience: [
      {
        companyName: "Google",
        positionTitle: "CEO",
        tasks: "Run google",
        from: "2010",
        to: "2020",
      },
    ],
  };

  const [cvDetails, setCvDetails] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = e.target.value;
    console.log(inputData);
    // setCvDetails();
  };

  return (
    <>
      <h1>CV GENERATOR</h1>
      <div className="wrapper">
        <div>
          <GeneralInformation
            initialState={initialState}
            // cvDetails={cvDetails}
            // setCvDetails={setCvDetails}
            handleSubmit={handleSubmit}
          />
          <Education />
          <Experience />
        </div>
        <div>
          <GeneralExample
            firstName={initialState.generalInformation[0].firstName}
            lastName={initialState.generalInformation[0].lastName}
            email={initialState.generalInformation[0].email}
            phoneNumber={initialState.generalInformation[0].phoneNumber}
            schoolName={initialState.education[0].schoolName}
            studyName={initialState.education[0].studyName}
            dateFrom={initialState.education[0].dateFrom}
            dateTo={initialState.education[0].dateTo}
            companyName={initialState.experience[0].companyName}
            positionTitle={initialState.experience[0].positionTitle}
            tasks={initialState.experience[0].tasks}
            from={initialState.experience[0].from}
            to={initialState.experience[0].to}
          />
        </div>
      </div>
    </>
  );
}

export default App;
