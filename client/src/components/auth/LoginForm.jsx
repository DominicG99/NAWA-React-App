import React, { useContext } from "react";
import { Form } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AuthContext from "../../context/AuthContext";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./loginpage.css";
function LoginForm() {
  const { getLoggedIn } = useContext(AuthContext);
  const { getUserInfo } = useContext(UserContext);
  const history = useHistory();
  const onFinish = async (data) => {
    await axios
      .post("http://localhost:5000/api/users/login", data, {
        withCredentials: true,
        credentials: "include",
      })
      .then(async (res) => console.log(res.data))
      .catch(async (err) => console.log(err.response.data));
    await getLoggedIn();
    await getUserInfo();
    history.push("/profile");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formContainer">
      <h1 className="loginHeader">Login</h1>
      <Form
        className="form"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          className="formInput"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            placeholder="Email"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          className="formInput"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="loginButton">
            Log In
          </Button>
        </Form.Item>
      </Form>
      <p className="notRegistered">
        Not registered?{" "}
        <Link className="createAccount" to="/register">
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
