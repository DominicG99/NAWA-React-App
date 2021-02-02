import React from "react";
import "./ProjectHeader.css";
function ProjectHeader() {
  return (
    <div
      style={{
        background: "url(../../images/image1.jpg)",
        padding: "15rem",
      }}
    >
      <div>
        <h1
          style={{ marginBottom: "3%", marginTop: "2%", textAlign: "center" }}
        >
          <strong>Not Just A Weather App</strong>
        </h1>

        <h5 className="subHeading">Team 20</h5>
        <h5 className="subHeading">
          CS 426 Senior Project in Computer Science
        </h5>
        <h5 className="subHeading">Spring 2021</h5>
        <h5 className="subHeading">
          University of Nevada, Reno, CSE Department
        </h5>
      </div>
    </div>
  );
}

export default ProjectHeader;
