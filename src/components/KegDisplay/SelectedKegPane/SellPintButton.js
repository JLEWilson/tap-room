import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function SellPintButton(props){
  const sellOnePintStyles = {
    width: "45%",
    marginRight: "10%"
  }
  
  function onClick(){
    props.sellPint(props.selectedKeg);
  }

  return(
    <Button style={sellOnePintStyles} variant="dark" onClick={onClick}>Sell One Pint</Button>
  )
}
SellPintButton.propTypes = {
  selectedKeg: PropTypes.object,
  sellPint: PropTypes.func
}
export default SellPintButton;