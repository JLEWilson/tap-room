import React from "react";
import KegSelectPane from "./KegSelectPane/KegSelectPane.js";
import SelectedKegPane from "./SelectedKegPane/SelectedKegPane.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function KegDisplay(props){
  const noSelectionStyle = {
    padding: '1em',
    border: '1px solid black',
    backgroundColor: '#A7BEA9',
    textAlign: "center"
  }

  let kegPane = null;
  if (props.selectedKeg === null) {
    kegPane = <h2 style={noSelectionStyle}>Please select a keg.</h2> 
  } else {
    kegPane = <SelectedKegPane selectedKeg={props.selectedKeg}/>
  }
  return(
    <React.Fragment>
      <Row>
        <Col className="col-4">
          <KegSelectPane
          kegs={props.kegs}
          updateCurrentPage={props.updateCurrentPage}
          sellPint={props.sellPint}
          newKeg={this.addNewKeg}
          updateSelectedKeg={props.updateSelectedKeg}/>
        </Col>
        <Col className="col-8">
          {kegPane}
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default KegDisplay;