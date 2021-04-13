import React from "react";
import TeamCard from "./TeamCard";
import team from "../information/team";
import { Row, Col } from "antd";
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

        <Col span={24}>
          <h1 className="whoAreWe">
              <strong>Meet the Team!</strong>
          </h1>
          <hr className="descriptionLine" />
          </Col>

      <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
        {team.map(createMemberCard)}
      </Row>
      <Row>

        <Col span={24}>
          <h2 className="whoAreWe">
              <strong>Who Are We?</strong>
          </h2>

          <hr className="descriptionLine" />

          <h3 className="studentTitle">
              Cole Atkinson
          </h3>

          <h4 className="individualDescription">
            <p
              style={{
              maxWidth: "120ch",
              textAlign: "center",
              margin: "0 auto",
              whiteSpace: "pre-wrap",
              color: "white",
              fontSize: "17px"
            }}
            >
            Hi I'm Cole and I am a computer science major at UNR. 
            I really enjoy the concept of computer safety, networks, and cybersecurity. 
            I like going to the beach and hanging out with friends.
            My favorite thing to do is create content for my tiktok. I currently have 90,000 followers!
            Please go follow me!
            </p>
          </h4>

          <h5 className="studentTitle">
              Chase Bosman
          </h5>

          <h6 className="individualDescription">
            <p
              style={{
              maxWidth: "120ch",
              textAlign: "center",
              margin: "0 auto",
              whiteSpace: "pre-wrap",
              color: "white",
              fontSize: "17px",
            
            }}
            >
            Hi, I'm Chase! I am a computer science major and mathematics minor. My goal is to become a software engineer post-graduation. 
            I look forward to working with a variety of technologies in this project to improve my development skills.
            When not spending time on my computer, I enjoy mountain biking, skiing, and the outdoors.
            </p>
          </h6>

          <h7 className="studentTitle">
              Dominic Ginter
          </h7>
          
          <h8 className="individualDescription">
            <p
              style={{
              maxWidth: "120ch",
              textAlign: "center",
              margin: "0 auto",
              whiteSpace: "pre-wrap",
              color: "white",
              fontSize: "17px",
              marginBottom: "2%",
            }}
            >
              Yo I'm Dominic! I am a motivated computer science major always trying to improve my computer science skills. 
              I want to focus my efforts in full stack development after graduating!
              I enjoy gardening and playing basketball on my free time!
            </p>
          </h8>

          <h9 className="studentTitle">
              James Young
          </h9>
          
          <h10 className="individualDescription">
            <p
              style={{
              maxWidth: "120ch",
              textAlign: "center",
              margin: "0 auto",
              whiteSpace: "pre-wrap",
              color: "white",
              fontSize: "17px",
            }}
            >
            Hi, my name is James. I am a computer science major with a minor in business and mathematics. I hope to work in Business Analytics/IT
            out of college, applying my computer science knowledge! When I'm not working on school, I enjoy playing basketball or visting tahoe!
            </p>
          </h10>


          </Col>
      </Row>


      <Col span={24}>
          <h1 className="instructors">
              <strong>Our Instructors!</strong>
          </h1>
          <hr className="descriptionLine" />
          </Col>   

      <Row>
      {instructors.map(createInstructorCard)}
      </Row>
    </div>

  );
}

export default Team;
