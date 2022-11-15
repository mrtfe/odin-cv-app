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

  const educationState = {
    schoolName: "",
    studyName: "",
    dateFrom: "",
    dateTo: "",
  };

  const experienceState = {
    companyName: "",
    positionTitle: "",
    tasks: "",
    from: "",
    to: "",
  };

  const [generalInfo, setGeneralInfo] = useState(generalInfoState);
  const [education, setEducation] = useState(educationState);
  const [experience, setExperience] = useState(experienceState);

  return (
    <>
      <h1>CV GENERATOR</h1>
      <div className="wrapper">
        <div>
          <GeneralInformation setGeneralInfo={setGeneralInfo} />
          <Education setEducation={setEducation} education={education} />
          <Experience setExperience={setExperience} experience={experience} />
        </div>
        <div>
          <Example
            generalInfo={generalInfo}
            education={education}
            schoolName={education.schoolName}
            studyName={education.studyName}
            dateFrom={education.dateFrom}
            dateTo={education.dateTo}
            companyName={experience.companyName}
            positionTitle={experience.positionTitle}
            tasks={experience.tasks}
            from={experience.from}
            to={experience.to}
          />
        </div>
      </div>
    </>
  );
}

export default App;
