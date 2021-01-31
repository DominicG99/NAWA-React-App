import React from "react";
import { Button } from "antd";
function MyButton(props) {
  return (
    <Button
      type={props.type}
      htmlType={props.htmlType}
      className={props.className}
    > 
      {props.text}
    </Button>
  );
}
export default MyButton;
