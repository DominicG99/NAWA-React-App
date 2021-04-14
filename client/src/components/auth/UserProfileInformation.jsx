import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import ImageContext from "../../context/ImageContext";
import "./userprofileinformation.css";
import { Row, Col } from "antd";
import axios from "axios";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
function UserProfileInformation() {
  const { userInfo } = useContext(UserContext);
  const { imageInfo } = useContext(ImageContext);
  const [data, setData] = useState("");
  const [savedData, setSavedData] = useState("");
  useEffect(async () => {
    await axios
      .get("http://localhost:5000/api/users/historyCords")
      .then((response) => {
        let userRoute = response.data;
        if (userRoute.length > 10) {
          userRoute = userRoute.splice(userRoute.length - 10);
        }

        setData(userRoute);
      });
  }, []);
  useEffect(async () => {
    await axios
      .get("http://localhost:5000/api/users/savedRoute")
      .then((response) => {
        let userFavoriteRoute = response.data;
        if (userFavoriteRoute.length > 5) {
          userFavoriteRoute = userFavoriteRoute.splice(
            userFavoriteRoute.length - 5
          );
        }

        setSavedData(userFavoriteRoute);
      });
  }, []);
  let history = useHistory();
  return (
    <Row>
      <Col className="previousRoutesContainer" span={8}>
        <h1>Previous Routes</h1>
        {Object.keys(data).map(function (key) {
          return (
            <Row>
              <Col span={24}>
                <p>
                  {data[key].startCity +
                    ", " +
                    data[key].startAdmin +
                    " to " +
                    data[key].destCity +
                    ", " +
                    data[key].destAdmin}
                </p>
                <Button
                  onClick={() => {
                    history.push({
                      pathname: "/map",
                      state: {
                        email: data[key].email,
                        city1: data[key].startCity,
                        admin1: data[key].startAdmin,
                        city2: data[key].destCity,
                        admin2: data[key].startAdmin,
                        origin: null,
                        destination: null,
                        dest_lat: data[key].destLat,
                        dest_lng: data[key].destLng,
                        start_lat: data[key].startLat,
                        start_lng: data[key].startLng,
                        mid0_lat: data[key].m1lat,
                        mid0_lng: data[key].m1lng,
                        mid1_lat: data[key].m2lat,
                        mid1_lng: data[key].m2lng,
                        mid2_lat: data[key].m3lat,
                        mid2_lng: data[key].m3lng,
                      },
                    });
                  }}
                  type="primary"
                  className="goButton"
                >
                  GO!
                </Button>
              </Col>
            </Row>
          );
        })}
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
        {Object.keys(savedData).map(function (key) {
          return (
            <Row>
              <Col span={24}>
                <p>
                  {savedData[key].startCity +
                    ", " +
                    savedData[key].startAdmin +
                    " to " +
                    savedData[key].destCity +
                    ", " +
                    savedData[key].destAdmin}
                </p>
                <Button
                  onClick={() => {
                    history.push({
                      pathname: "/personal-map",
                      state: {
                        id: savedData[key]._id,
                        email: savedData[key].email,
                        city1: savedData[key].startCity,
                        admin1: savedData[key].startAdmin,
                        city2: savedData[key].destCity,
                        admin2: savedData[key].startAdmin,
                        origin: null,
                        destination: null,
                        dest_lat: savedData[key].destLat,
                        dest_lng: savedData[key].destLng,
                        start_lat: savedData[key].startLat,
                        start_lng: savedData[key].startLng,
                        mid0_lat: savedData[key].m1lat,
                        mid0_lng: savedData[key].m1lng,
                        mid1_lat: savedData[key].m2lat,
                        mid1_lng: savedData[key].m2lng,
                        mid2_lat: savedData[key].m3lat,
                        mid2_lng: savedData[key].m3lng,
                      },
                    });
                  }}
                  className="goButton"
                >
                  GO!
                </Button>
              </Col>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
}

export default UserProfileInformation;
