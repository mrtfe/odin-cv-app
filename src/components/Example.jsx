import React from "react";
import "../styles/exampleStyle.css";

export function Example(props) {
  const handleDelete = (eduItem) => {
    console.log(eduItem);
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
        {props.education.map((eduItem, index) => (
          <div key={eduItem.id} className="education-card card">
            <div className="education-label label">
              Study name: {eduItem.studyName}
            </div>
            <div className="education-info info">
              <p>{eduItem.schoolName} | </p>
              <p>{eduItem.dateFrom} - </p>
              <p>{eduItem.dateTo}</p>
              <button className="del-btn" onClick={() => handleDelete(eduItem)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="experience container ">
        {props.experience.length > 0 && <h3>Experience</h3>}
        {props.experience.map((expItem, index) => (
          <div key={index} className="experience-card card">
            <div className="experience-label label">
              Company name: {expItem.studyName}
            </div>
            <div className="experience-info info">
              <p>{expItem.companyName} |</p>
              <p>{expItem.positionTitle} |</p>
              <p>{expItem.tasks} |</p>
              <p>{expItem.from} -</p>
              <p>{expItem.to}</p>
              <button className="del-btn" onClick={() => handleDelete(expItem)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
