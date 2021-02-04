import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./RelatedResources.css";
import LogoLink from "./LogoLink";
import technologies from "../technologies";

function createLogoLink(technology) {
  return (
    <LogoLink
      key={technology.id}
      image={technology.image}
      name={technology.name}
      website={`../images/${technology.website}`}
    />
  );
}

function RelatedResources() {
  return (
    <div className="container">
      <Row>
        <Col
          className="gutter-row"
          xs={{ span: 24, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
        >
          <h2 className="centerText">
            <strong>Domain Books</strong>
          </h2>
          <hr className="dottedLine" />

          <a href="/" target="_blank" rel="noreferrer">
            <h5 className="links">Link to some book.</h5>
          </a>
          <h2 className="centerText">
            <strong>Web Resources</strong>
          </h2>
          <hr className="dottedLine" />

          <a href="/" target="_blank" rel="noreferrer">
            <h5 className="links">Link to some book.</h5>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <h5 className="links">Link to some book.</h5>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <h5 className="links">Link to some book.</h5>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <h5 className="links">Link to some book.</h5>
          </a>
        </Col>
        <Col
          className="gutter-row"
          xs={{ span: 24, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
        >
          <h2 className="centerText">
            <strong>Technologies Used</strong>
          </h2>
          <hr className="dottedLine" />
          {technologies.map(createLogoLink)}
        </Col>
        <Col
          className="gutter-row"
          xs={{ span: 24, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
        >
          <h2 className="centerText">
            <strong>Scholarly Resources</strong>
          </h2>
          <hr className="dottedLine" />
          <a href="/" target="_blank" rel="noreferrer">
            <h5 className="links">Link to some book.</h5>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <h5 className="links">Link to some book.</h5>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <h5 className="links">Link to some book.</h5>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default RelatedResources;
