import React from "react";
import axios from "axios";
import { Form } from "antd";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function RegisterForm() {
  const onFinish = (values) => {
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
        rules={[{ required: true, message: "Please input your first name!" }]}
        style={{ width: "25%" }}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
        style={{ width: "25%" }}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Form.Item
        style={{ width: "25%" }}
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
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
        hasFeedback
        style={{ width: "25%" }}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
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
