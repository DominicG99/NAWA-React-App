import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import ImageContext from "../../context/ImageContext";
import "./userprofileinformation.css";
import { Row, Col } from "antd";
import axios from "axios";
var userRoute;
function UserProfileInformation() {
  const { userInfo } = useContext(UserContext);
  const { imageInfo } = useContext(ImageContext);
  const [data, setData] = useState("");
  useEffect(async () => {
    await axios
      .get("http://localhost:5000/api/users/historyCords")
      .then((response) => {
        userRoute = response.data[0];
        console.log("this is the route data: ", userRoute);
        setData(userRoute);
      });
  }, []);
  return (
    <Row>
      <Col className="previousRoutesContainer" span={8}>
        <h1>Previous Routes</h1>
        {/* {data !== undefined && <h2>{data.startLat}</h2>} */}
        <h2>{data.startLat}</h2>
      </Col>
      <Col className="profileInfoContainer" span={8}>
        {userInfo === undefined && (
          <img
            className="userPicture"
            src="./images/placeholder-image.png"
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
