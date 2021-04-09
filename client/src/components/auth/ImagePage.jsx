import React, {useState} from "react";
import axios from "axios";
import { Form } from "antd";
import "antd/dist/antd.css";


import { Button, Input } from "antd";
//import { UserOutlined, LockOutlined } from "@ant-design/icons";

function ImagePage() {
  const [image, setImage] = useState(undefined);
  function handleClick(e) {

    axios.get("http://localhost:5000/api/users/retrieveImage")
    .then((response) => {
      console.log("this is the url: ", response.data)
    }
    )
    e.preventDefault();
   
  }


  function onFinish(values) {
    var data = {
      pictureURL: values.pictureURL
    };
    axios
      .post("http://localhost:5000/api/users/imageData", data, {
        withCredentials: true,
        credentials: "include",
      })

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
        name="pictureURL"
        rules={[{ required: true, message: "Please input your first name!" }]}
        style={{ width: "25%" }}
      >
        <Input placeholder="Upload your image URL" />
      </Form.Item>
     
      

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Apply Changes
        </Button>
      </Form.Item>
      <a href="#" onClick={handleClick}>
         Click me
      </a>
    </Form>
    
  );
}
export default ImagePage;
