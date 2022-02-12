import React from "react";
import Button from "react-bootstrap/Button";
import { v4 } from 'uuid';

function RestockButton(props) {
  const restockButtonStyles = {
    width: "100%"
  }
  const formStyles = {
    width: "45%"
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
      <form onSubmit={handleAddKegFormSubmission} style={formStyles}>
        <Button type="submit" variant="dark" style={restockButtonStyles}>Restock This Keg</Button>
      </form>
    </React.Fragment>
  )
}

export default RestockButton;