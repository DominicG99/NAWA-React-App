import React, { useContext } from "react";
import { Form, Checkbox } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AuthContext from "../../context/AuthContext";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router";

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
    history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      style={{ width: "25%" }}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
