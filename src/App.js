import React, { useState } from "react";
import { GeneralInformation } from "./components/GeneralInformation";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { GeneralExample } from "./components/GeneralExample";
import "./App.css";

function App() {
  const generalInfoState = {
    firstName: "Martynas",
    lastName: "Fetingis",
    email: "martynas.f@gmail.com",
    phoneNumber: "112",
  };

  const educationState = [
    {
      schoolName: "Codeacademy",
      studyName: "Front-end",
      dateFrom: "2022-05",
      dateTo: "2022-12",
    },
  ];
  const experienceState = [
    {
      companyName: "Google",
      positionTitle: "CEO",
      tasks: "Run google",
      from: "2010",
      to: "2020",
    },
    {
      companyName: "Google",
      positionTitle: "CEO",
      tasks: "Run google",
      from: "2010",
      to: "2020",
    },
  ];

  const [generalInfo, setGeneralInfo] = useState(generalInfoState);
  const [education, setEducation] = useState(educationState);
  const [experience, setExperience] = useState(experienceState);

  const handleGeneralInfoChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    console.log({ inputName: inputName, inputData: inputData });
    // setGeneralInfo({ ...generalInfoState, inputName: inputData });
  };
  const handleEducationChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    console.log({ inputName: inputName, inputData: inputData });
  };
  const handleExperienceChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    console.log({ inputName: inputName, inputData: inputData });
  };

  return (
    <>
      <h1>CV GENERATOR</h1>
      <div className="wrapper">
        <div>
          <GeneralInformation
            initialState={generalInfoState}
            handleChange={handleGeneralInfoChange}
          />
          <Education handleChange={handleEducationChange} />
          <Experience handleChange={handleExperienceChange} />
        </div>
        <div>
          <GeneralExample
            firstName={generalInfoState.firstName}
            lastName={generalInfoState.lastName}
            email={generalInfoState.email}
            phoneNumber={generalInfoState.phoneNumber}
            schoolName={educationState[0].schoolName}
            studyName={educationState[0].studyName}
            dateFrom={educationState[0].dateFrom}
            dateTo={educationState[0].dateTo}
            companyName={experienceState[0].companyName}
            positionTitle={experienceState[0].positionTitle}
            tasks={experienceState[0].tasks}
            from={experienceState[0].from}
            to={experienceState[0].to}
          />
        </div>
      </div>
    </>
  );
}

export default App;
