import React, { useState } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import "./Sider.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import MyFooter from "./MyFooter";

const { Content, Sider } = Layout;

function MySider() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <span>Home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>About Us</span>
              <Link to="/about-us" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "0",
              padding: "0",
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route exact path="/sign-up" component={Register} />
              <Redirect to="404" />
            </Switch>
          </Content>
          <MyFooter />
        </Layout>
      </Layout>
    </Router>
  );
}

export default MySider;
