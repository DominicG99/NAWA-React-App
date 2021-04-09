import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./profilepage.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;

//Form -> Form.Item -> Submit button
function ProfilePage() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="fullPage">
      <h1>{userInfo.userInfo.firstName}</h1>
      <h1>{userInfo.userInfo.lastName}</h1>
      <h1>{userInfo.userInfo.email}</h1>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            Edit Profile
            <Link to="/editProfile" />
          </Menu.Item>
          <Menu.Item key="3">
            Edit Preferences
            <Link to="/preferences" />
          </Menu.Item>
          <Menu.Item key="4">
            Upload Image
            <Link to="/images" />
            </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default ProfilePage;
