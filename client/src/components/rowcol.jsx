import React from "react";
import { Row, Col } from "react-bootstrap";

function RowCol(props) {
  return (
    <Row style={props.rowStyle}>
      <Col style={props.colStyle}>{props.element}</Col>
    </Row>
  );
}

export default RowCol;
