import React from "react";
import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import MyForm from "../components/myform";
import { Container } from "react-bootstrap";
const LoginPage = () => {
  return (
    <div>
      <MyNavbar />
      <Container style={{ paddingTop: "10%", width: "25%" }}>
        <MyForm />
      </Container>

      <Footer />
    </div>
  );
};

export default LoginPage;
