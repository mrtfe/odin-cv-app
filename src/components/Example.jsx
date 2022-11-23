import React from "react";
import "../styles/exampleStyle.css";

export function Example(props) {
  const handleEducationDelete = (e) => {
    props.setEducation(props.education.filter((item) => item.id !== e.id));
  };
  const handleExpDelete = (e) => {
    props.setExperience(props.experience.filter((item) => item.id !== e.id));
  };

  const handleEducationEdit = (e) => {
    const selectedItem = props.education.find((item) => item.id === e.id);
    props.setEditableEduState(selectedItem.id);
  };

  return (
    <div className="example-wrapper">
      <div className="general-info">
        {/* <h3>General information</h3> */}
        <div className="first-name">
          <div className="gen-content"> {props.generalInfo.firstName}</div>
          <div className="gen-content"> {props.generalInfo.lastName}</div>
        </div>
        <div className="gen-info-secondary"> </div>
        <div className="gen-info-secondary">
          <div className="gen-content"> {props.generalInfo.email}</div>
        </div>
        <div className="gen-info-secondary">
          <div className="gen-content"> {props.generalInfo.phoneNumber}</div>
        </div>
        <div className="gen-info-secondary"></div>
      </div>

      <div className="education container ">
        {props.education.length > 0 && <h3>Education</h3>}
        {props.education.map((eduItem) => (
          <div key={eduItem.id} className="education-card card">
            <div className="education-label label">
              Study name: {eduItem.studyName}
            </div>
            <div className="education-info info">
              <p>{eduItem.schoolName} | </p>
              <p>{eduItem.dateFrom} - </p>
              <p>{eduItem.dateTo}</p>
              <button
                className="del-btn"
                onClick={() => handleEducationDelete(eduItem)}
              >
                Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => handleEducationEdit(eduItem)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="experience container ">
        {props.experience.length > 0 && <h3>Experience</h3>}
        {props.experience.map((expItem) => (
          <div key={expItem.id} className="experience-card card">
            <div className="experience-label label">
              Company name: {expItem.studyName}
            </div>
            <div className="experience-info info">
              <p>{expItem.companyName} |</p>
              <p>{expItem.positionTitle} |</p>
              <p>{expItem.tasks} |</p>
              <p>{expItem.from} -</p>
              <p>{expItem.to}</p>

              <button
                className="del-btn"
                onClick={() => handleExpDelete(expItem)}
              >
                Delete
              </button>
              <button className="edit-btn" onClick={() => handleEducationEdit}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
