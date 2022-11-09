import React from "react";
import "../styles/formStyle.css";

export function Experience() {
  return (
    <>
      <form className="form experience">
        <h3>Experience</h3>
        <div>
          <input placeholder="Company name" type="text"></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
        <div>
          <input placeholder="Position title" type="text"></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
        <div>
          <input placeholder="Main tasks of your jobs" type="text"></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
        <div>
          <input placeholder="From" type="text"></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
        <div>
          <input placeholder="To" type="text"></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
      </form>
    </>
  );
}
