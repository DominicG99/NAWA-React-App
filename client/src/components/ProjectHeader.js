import React from "react";
import "./ProjectHeader.css";
function ProjectHeader() {
  return (
    <div
      style={{
        background: "url(../../images/aboutusroad.jpg)",
        padding: "15rem",
      }}
    >
      <div>
        <h1 className = "mainHeading">
          Not Just a Weather App 
        </h1>

        <h5 className = "classHeading">
          CS 426 Senior Project in Computer Science
        </h5>

        <h5 className="schoolHeading">
          University of Nevada, Reno, CSE Department
        </h5>

        <h5 className="semesterHeading">
        Spring 2021
        </h5>
        
        <h5 className="teamHeading">
        Team #20
        </h5>
        
        </div>
    </div>
  );
}

export default ProjectHeader;
