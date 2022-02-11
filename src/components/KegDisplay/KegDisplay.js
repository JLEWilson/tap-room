import React from "react";
import KegSelectPane from "./KegSelectPane/KegSelectPane.js";
import SelectedKegPane from "./SelectedKegPane/SelectedKegPane.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function KegDisplay(props){
  const kegDisplayStyles = {

  };
  return(
    <React.Fragment>
      <Row>
        <Col className="col-4">
          <KegSelectPane/>
        </Col>
        <Col className="col-8">
          <SelectedKegPane/>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default KegDisplay;