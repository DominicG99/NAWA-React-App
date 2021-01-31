import React from "react";
import { Form } from "antd";

function FormItem(props) {
  return (
    <Form.Item
      name={props.name}
      rules={props.rules}
      valuePropName={props.valuePropName}
      noStyle={props.noStyle}
    >
      {props.content}
    </Form.Item>
  );
}

export default FormItem;
