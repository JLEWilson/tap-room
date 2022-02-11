import React from "react";
import Button from "react-bootstrap/Button";

function SellPintButton(props){
  const centerButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  
  function onClick(){
    props.sellPint(props.selectedKeg);
  }

  return(
    <React.Fragment>
      <div style={centerButton}>
        <Button variant="dark" onClick={onClick}>Sell One Pint</Button>
      </div>
    </React.Fragment>
  )
}

export default SellPintButton;