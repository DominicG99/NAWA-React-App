import React from "react";
import axios from "axios";
import { Form } from "antd";
import "antd/dist/antd.css";

import { Button, Input } from "antd";
//import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

function PreferencesForm() {
  const history = useHistory();
  function onFinish(values) {
    var data = {
      favoriteFood: values.favoriteFood,
      favoriteLocation: values.favoriteLocation,
    };
    axios
      .post("http://localhost:5000/api/users/preferences", data, {
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
      {
        <Form.Item
          name="favoriteFood"
          rules={[
            { required: true, message: "Please input your favorite food!" },
          ]}
          style={{ width: "25%" }}
        >
          <Input placeholder="Input your favorite food! (ie: Hamburger)" />
        </Form.Item>
      }
      {
        <Form.Item
          name="favoriteLocation"
          rules={[
            { required: true, message: "Please input your favorite location!" },
          ]}
          style={{ width: "25%" }}
        >
          <Input placeholder="Input your favorite city! (ie: Houston, TX)" />
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
export default PreferencesForm;
