import React from "react";
import Button from "react-bootstrap/Button";
import PropoTypes from "prop-types";

function NewKegButton(props) {
  const newKegButtonStyles = {
    width: "25em",
    marginTop: ".5em"
  }
  const centerButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  function onClick() {
    props.newKeg("newKegForm");
  }

  return(
    <React.Fragment>
      <div style={centerButton}>
        <Button style={newKegButtonStyles} variant="dark" onClick={onClick}>Add New Keg</Button>
      </div>
    </React.Fragment>
  )
}
NewKegButton.propTypes = {
  newKeg: PropTypes.function
}
export default NewKegButton;