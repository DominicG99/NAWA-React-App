import React from "react";
import "../../App.css";
import ProjectDescription from "../ProjectDescription";
import ProjectHeader from "../ProjectHeader";
import RelatedResources from "../RelatedResources";
import Team from "../Team";

export default function AboutUs() {
  return (
    <div>
      <ProjectHeader />
      <ProjectDescription />
      <Team />
      <RelatedResources />
    </div>
  );
}
