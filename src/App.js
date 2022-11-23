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

  const [generalInfo, setGeneralInfo] = useState(generalInfoState);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const [editableEduState, setEditableEduState] = useState(null);

  return (
    <>
      <h1>CV GENERATOR</h1>
      <div className="wrapper">
        <div className="content-left">
          <div>
            <GeneralInformation setGeneralInfo={setGeneralInfo} />
            <Education
              setEducation={setEducation}
              education={education}
              editableEduState={editableEduState}
              setEditableEduState={setEditableEduState}
            />
            <Experience setExperience={setExperience} experience={experience} />
          </div>
        </div>
        <div className="content-right">
          <Example
            generalInfo={generalInfo}
            education={education}
            setEducation={setEducation}
            experience={experience}
            setExperience={setExperience}
            editableEduState={editableEduState}
            setEditableEduState={setEditableEduState}
          />
        </div>
      </div>
    </>
  );
}

export default App;
