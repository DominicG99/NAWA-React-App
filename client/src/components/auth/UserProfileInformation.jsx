import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./userprofileinformation.css";
import { Row, Col } from "antd";
function UserProfileInformation() {
  const { userInfo } = useContext(UserContext);
  return (
    <Row>
      <Col className="previousRoutesContainer" span={8}>
        <h1>Previous Routes</h1>
      </Col>
      <Col className="profileInfoContainer" span={8}>
        <img className="userPicture" src="./images/placeholder-image.png" />
        <h1 className="userFirstAndLast">
          {userInfo.userInfo.firstName} {userInfo.userInfo.lastName}
        </h1>
        <h1 className="userEmail">{userInfo.userInfo.email}</h1>
      </Col>
      <Col className="favoriteRoutesContainer" span={8}>
        <h1>Favorite Routes</h1>
      </Col>
    </Row>
  );
}

export default UserProfileInformation;
