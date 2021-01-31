import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
function MyInput(props) {
  return (
    <Input
      size="large"
      placeholder={props.placeholder}
      prefix={props.prefix}
      type={props.type}
    />
  );
}

export default MyInput;
