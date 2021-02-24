import React from "react";
import axios from "axios";
import ReactDOM from 'react-dom'
import { Form } from "antd";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

var firstName
var lastName
var emailskis
var password



function RegisterForm() {
  const onFinish = (values) => {
    document.write("emailskis")
    alert("hi")
    console.log("Received values of form: ", values);
    axios
      
      .post("http://localhost:5000/login", values)
      .then((res) => console.log("Data sent"))
      .catch((err) => console.log(err.data));
  };
  return (
    <Form
      name="register_form"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="firstName"
        label="First Name:"
        rules={[{ 
                  required: true,
                  message: 'Please input your first name!',
                 }]}
        style={{ width: "25%" }}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
        style={{ width: "25%" }}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Form.Item
        style={{ width: "25%" }}
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
          emailskis = ({ getFieldValue }) => ({
            validator(_, value) {
             var email = getFieldValue("email")
             return email;
            },
          }),
          
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
        style={{ width: "25%" }}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        style={{ width: "25%" }}
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
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      
    </Form>
  );
}

export default RegisterForm;
