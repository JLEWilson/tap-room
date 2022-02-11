import React from "react";
import Button from "react-bootstrap/Button";
import { v4 } from 'uuid';

function RestockButton(props) {
  const restockButtonStyles = {
    width: "5em"
  }
  const centerButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  function handleAddKegFormSubmission(event) {
    event.preventDefault();
    const kegToReorder = {
      id: v4(),
          name: props.selectedKeg.name,
          brand: props.selectedKeg.brand,
          price:props.selectedKeg.price,
          abv: props.selectedKeg.abv,
          pints: 124
    }
    props.newKeg(kegToReorder);
  }

  return(
    <React.Fragment>
      <form onSubmit={handleAddKegFormSubmission}>
        <div style={centerButton}>
          <Button type="submit" variant="dark" style={restockButtonStyles}>Restock This Keg</Button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default RestockButton;