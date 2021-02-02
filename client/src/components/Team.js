import React from "react";
import TeamCard from "./TeamCard";
import team from "../team";
import { Row } from "antd";
import Icons from "./Icons";
import "./Team.css";
import "../instructors";
import instructors from "../instructors";
import InstructorCard from "./InstructorCard";
function createMemberCard(member) {
  return (
    <TeamCard
      name={member.name}
      image={`../images/${member.image}`}
      text={
        <Icons
          resume={member.resume}
          githubLink={member.github}
          linkedinLink={member.linkedin}
        />
      }
    />
  );
}

function createInstructorCard(instructor) {
  return (
    <InstructorCard
      name={instructor.name}
      image={`../images/${instructor.image}`}
    />
  );
}

function Team() {
  return (
    <div className="teamContainer">
      <h1>
        <strong>The Team</strong>
      </h1>
      <Row style={{ marginTop: "5%", marginBottom: "10%" }}>
        {team.map(createMemberCard)}
      </Row>
      <h1>
        <strong>Instructors</strong>
      </h1>
      <Row>{instructors.map(createInstructorCard)}</Row>
    </div>
  );
}

export default Team;
