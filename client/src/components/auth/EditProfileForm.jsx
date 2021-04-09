import React from "react";
import axios from "axios";
import { Form } from "antd";
import "antd/dist/antd.css";

import { Button, Input } from "antd";
//import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

function EditProfileForm() {
  const history = useHistory();
  function onFinish(values) {
    var data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      password2: values.confirm,
    };
    axios
      .post("http://localhost:5000/api/users/updateData", data, {
        withCredentials: true,
        credentials: "include",
      })
      .then(async (res) => history.push("/"))
      .catch(async (err) => console.log(err.response.data));
  }
  return (
    <Form
      name="register_form"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Please input your first name!" }]}
        style={{ width: "25%" }}
      >
        <Input placeholder="Change your first name" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
        style={{ width: "25%" }}
      >
        <Input placeholder="Change your last name" />
      </Form.Item>
      {
        <Form.Item
          style={{ width: "25%" }}
          name="email"
          rules={[
            {
              required: true,

              type: "email",
            },
          ]}
        >
          <Input placeholder="Change your email" />
        </Form.Item>
      }

      {
        <Form.Item
          name="password"
          placeholder="password"
          rules={[
            {
              required: true,
            },
          ]}
          hasFeedback
          style={{ width: "25%" }}
        >
          <Input.Password placeholder="Change your password" />
        </Form.Item>
      }

      {
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
          <Input placeholder="Confirm password"></Input>
        </Form.Item>
      }

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Apply Changes
        </Button>
      </Form.Item>
    </Form>
  );
}
export default EditProfileForm;
