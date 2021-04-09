import React from "react";
import axios from "axios";
import { Form } from "antd";
import "antd/dist/antd.css";

import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
function RegisterForm() {
  const history = useHistory();
  function onFinish(values) {
    var data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      password2: values.confirm,
      location: values.test,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/api/users/register", data, {
        withCredentials: true,
        credentials: "include",
      })
      .then(history.push("/login"))
      .catch(async (err) => console.log(err.response.data));
  }
  return (
    <div className="registerFormContainer">
      <h1 className="registerHeader">Register</h1>
      <Form
        name="register_form"
        className="registerForm"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input
            placeholder="First Name"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input
            placeholder="Last Name"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input
            placeholder="Email Address"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Password"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item>
          <Button className="registerButton" type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
      <p className="alreadyRegistered">
        Already registered? <Link className="loginNow">Login now</Link>
      </p>
    </div>
  );
}
export default RegisterForm;
