import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./RelatedResources.css";
import LogoLink from "./LogoLink";
import technologies from "../information/technologies";

function createLogoLink(technology) {
  return (
    <LogoLink
      key={technology.id}
      image={technology.image}
      name={technology.name}
      website={`${technology.website}`}
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

          <a href="https://www.mountain-n-air.com/Mountain-Biking-Santa-Cruz-p/9780972336123.html" target="_blank" rel="noreferrer">
            <h5 className="links">Mountain Biking Santa Cruz</h5>
          </a>
          <h2 className="centerText">
            <strong>Web Resources</strong>
          </h2>
          <hr className="dottedLine" />

          <a href="https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks" target="_blank" rel="noreferrer">
            <h5 className="links">Convert Class Components to Functional</h5>
          </a>
          <a href="https://colorhunt.co/" target="_blank" rel="noreferrer">
            <h5 className="links">Color Hunt</h5>
          </a>
          <a href="https://medium.com/analytics-vidhya/upload-image-in-cloudinary-using-mern-stack-39fcb4ed9d9e" target="_blank" rel="noreferrer">
            <h5 className="links">Using Cloudinary</h5>
          </a>
          <a href="https://spring.io/" target="_blank" rel="noreferrer">
            <h5 className="links">Spring</h5>
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
          <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noreferrer">
            <h5 className="links">Udemy Web Design Course</h5>
          </a>
          <a href="https://books.google.com/books?hl=en&lr=&id=FxejBgAAQBAJ&oi=fnd&pg=PR3&dq=web+design+&ots=tN8ykLkWBe&sig=hFlExOWY-Fi31HYl-HVmLA8JIHE#v=onepage&q=web%20design&f=false" target="_blank" rel="noreferrer">
            <h5 className="links">The Principles of Beautiful Web Design</h5>
          </a>
          <a href="https://dl.acm.org/doi/abs/10.1145/344949.345077?casa_token=uXQZiPqTHRIAAAAA:-SAHVVYoSCVnAQHzfmJSMqlB1eKwTDWVYpaGzxrAQXjfxgBz3WKmO6O4RQz5r635n9cXb0TKvvLq" target="_blank" rel="noreferrer">
            <h5 className="links">Creating UI</h5>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default RelatedResources;
