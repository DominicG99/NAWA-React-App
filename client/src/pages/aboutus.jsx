import React from "react";
import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import { Row, Col } from "react-bootstrap";
// import AboutUsCarouselItem from "../components/aboutuscarouselitem";
import AboutUsCard from "../components/aboutuscard.jsx";
import "../styles/aboutus.css";
import ProjectDescription from "../components/projectdescription";

const AboutUsPage = () => {
  return (
    <div className="pageBackground">
      <Row>
        <Col>
          <MyNavbar />
        </Col>
      </Row>

      <ProjectDescription />
      {/* <AboutUsCarouselItem className="carousel" /> */}
      <AboutUsCard />
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsPage;
