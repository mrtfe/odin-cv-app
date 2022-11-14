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
      schoolName: "Odin",
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
      companyName: "Facebook",
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
    // const newGeneralInfo = {
    //   firstName: e.target.value,
    //   lastName: e.target.value,
    //   email: e.target.value,
    //   phoneNumber: e.target.value,
    // };
    // setGeneralInfo({ ...generalInfo, newGeneralInfo });
    const inputName = e.target.name;
    const inputData = e.target.value;
    setGeneralInfo({ ...generalInfo, [inputName]: inputData });
    console.log(generalInfo);
  };

  const handleEducationChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    setEducation({ ...education, [inputName]: inputData });
    console.log(education);
  };

  const handleExperienceChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    setExperience({ ...experienceState, [inputName]: inputData });
    console.log(experience);
  };

  // console.log(education);

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
            schoolName={education[0].schoolName}
            studyName={education[0].studyName}
            dateFrom={education[0].dateFrom}
            dateTo={education[0].dateTo}
            companyName={experienceState[0].companyName}
            positionTitle={experienceState[0].positionTitle}
            tasks={experienceState[0].tasks}
            from={experienceState[0].from}
            to={experienceState[0].to}
            education={experienceState}
          />
        </div>
      </div>
    </>
  );
}

export default App;
