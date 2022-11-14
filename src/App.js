import React, { useState } from "react";
import { GeneralInformation } from "./components/GeneralInformation";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Example } from "./components/Example";
import "./App.css";

function App() {
  const generalInfoState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  const educationState = [
    {
      schoolName: "Codeacademy",
      studyName: "Front-end",
      dateFrom: "2022-05",
      dateTo: "2022-12",
    },
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

  console.log(education);

  const handleGeneralInfoChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    // console.log({ inputName: inputName, inputData: inputData });
    setGeneralInfo({ ...generalInfo, [inputName]: inputData });
    console.log(generalInfo);
  };

  const handleEducationChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    // console.log({ inputName: inputName, inputData: inputData });
    setEducation({ ...educationState, [inputName]: inputData });
    console.log(education);
  };

  const handleExperienceChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    // console.log({ inputName: inputName, inputData: inputData });
    setExperience({ ...experienceState, [inputName]: inputData });
    console.log(experience);
  };

  return (
    <>
      <h1>CV GENERATOR</h1>
      <div className="wrapper">
        <div>
          <GeneralInformation
            // initialState={generalInfoState}
            handleChange={handleGeneralInfoChange}
          />
          <Education handleChange={handleEducationChange} />
          <Experience handleChange={handleExperienceChange} />
        </div>
        <div>
          <Example
            firstName={generalInfo.firstName}
            lastName={generalInfo.lastName}
            email={generalInfo.email}
            phoneNumber={generalInfo.phoneNumber}
            schoolName={education.schoolName}
            studyName={education.studyName}
            dateFrom={education.dateFrom}
            dateTo={education.dateTo}
            companyName={experienceState[0].companyName}
            positionTitle={experienceState[0].positionTitle}
            tasks={experienceState[0].tasks}
            from={experienceState[0].from}
            to={experienceState[0].to}
            education={education}
          />
        </div>
      </div>
    </>
  );
}

export default App;
