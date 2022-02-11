import React from "react";
import Button from "react-bootstrap/Button";

function NewKegButton(props) {
  const newKegButtonStyles = {
    width: "5em"
  }
  const centerButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  function onClick() {
    props.updateCurrentPage("newKegForm");
  }

  return(
    <React.Fragment>
      <div style={centerButton}>
        <Button variant="dark" onClick={onClick}>Add New Keg</Button>
      </div>
    </React.Fragment>
  )
}

export default NewKegButton;