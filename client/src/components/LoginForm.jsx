import React from "react";
import { Form, Checkbox } from "antd";
import FormItem from "./FormItem";
import MyInput from "./MyInput";
import "antd/dist/antd.css";
import { Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

function LoginForm(props) {
  return (
    <Form
      name={props.name}
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <FormItem
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
        content={
          <MyInput
            placeholder="Email Address"
            prefix={<UserOutlined />}
            type="text"
            style={{ width: "50%" }}
          />
        }
      />
      <FormItem
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
        content={
          <MyInput
            placeholder="Password"
            prefix={<LockOutlined />}
            type="password"
            style={{ width: "50%", textAlign: "center" }}
          />
        }
      />
      <FormItem
        name="remember"
        valuePropName="checked"
        noStyle="true"
        content={<Checkbox>Remember me</Checkbox>}
      />
      <Link to="/register">Forgot Password</Link>

      <FormItem
        content={
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        }
      />
    </Form>
  );
}
export default LoginForm;
