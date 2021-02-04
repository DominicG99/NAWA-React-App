import React from "react";
import TeamCard from "./TeamCard";
import team from "../information/team";
import { Row } from "antd";
import Icons from "./Icons";
import "./Team.css";
import instructors from "../information/instructors";
import InstructorCard from "./InstructorCard";
function createMemberCard(member) {
  return (
    <TeamCard
      key={member.id}
      name={member.name}
      image={`../images/${member.image}`}
      text={
        <Icons
          resume={member.resume}
          githubLink={member.github}
          linkedInLink={member.linkedin}
        />
      }
    />
  );
}

function createInstructorCard(instructor) {
  return (
    <InstructorCard
      key={instructor.id}
      name={instructor.name}
      image={`../images/${instructor.image}`}
      text={instructor.description}
    />
  );
}

function Team() {
  return (
    <div className="teamContainer">
      <h1>
        <strong>The Team</strong>
      </h1>
      <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
        {team.map(createMemberCard)}
      </Row>
      <Row>{instructors.map(createInstructorCard)}</Row>
    </div>
  );
}

export default Team;
