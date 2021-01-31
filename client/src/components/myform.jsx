import React from "react";
import { Form, Checkbox } from "antd";
import FormItem from "./formitem";
import MyInput from "./myinput";
import MyButton from "./mybutton";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

function MyForm(props) {
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
          <MyButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
            text="Log in"
          />
        }
      />
    </Form>
  );
}
export default MyForm;
