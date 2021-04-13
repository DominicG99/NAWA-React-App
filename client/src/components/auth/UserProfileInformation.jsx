import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import ImageContext from "../../context/ImageContext";
import "./userprofileinformation.css";
import { Row, Col } from "antd";
function UserProfileInformation() {
  const { userInfo } = useContext(UserContext);
  const { imageInfo } = useContext(ImageContext);

  return (
    <Row>
      <Col className="previousRoutesContainer" span={8}>
        <h1>Previous Routes</h1>
      </Col>
      <Col className="profileInfoContainer" span={8}>
        {userInfo === undefined && (
          <img
            className="userPicture"
            src="./images/placeHolder-image.png"
            alt="User Profile"
          />
        )}
        {userInfo !== undefined && (
          <img className="userPicture" src={imageInfo} alt="User Profile" />
        )}
        <h1 className="userFirstAndLast">
          Hello There {userInfo.userInfo.firstName} {userInfo.userInfo.lastName}
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
