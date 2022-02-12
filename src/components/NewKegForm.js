import React from "react";
import Button from "react-bootstrap/Button";
import { v4 } from "uuid";

function NewKegForm(props) {
  const centerItems = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
  const inputStyles = {
    marginBottom: "1em",
    width: "40%",
    height: "3em",
    backgroundColor: "whiteSmoke"
  }
  const addKegButtonStyles = {
    width: "30%",
    marginTop: ".5%",
  }
  const insertDecimal = (price) => {
    return price.slice(0, price.length-2) + "." + price.slice(price.length-2);
  };
  
  function handleAddKegFormSubmission(event) {
    event.preventDefault();
    const kegToReorder = {
      id: v4(),
      name: event.target.name,
      brand: event.target.brand,
      price: insertDecimal(event.target.price),
      abv: event.target.abv,
      pints: 124
    }
    props.newKeg(kegToReorder);
    props.updateCurrentPage("home");
  }

  return(
    <React.Fragment>
      <form style={centerItems} onSubmit={handleAddKegFormSubmission}>
        <input style={inputStyles}
          type="text"
          name="name"
          placeholder="Product"/>
        <input style={inputStyles}
          type="text"
          name="brand"
          placeholder="Brand"/>
        <input style={inputStyles}
          type="number"
          name="price"
          min="0"
          step=".01"
          placeholder="Price" />
        <input style={inputStyles}
          type="number"
          name="abv"
          min="0"
          step=".01"
          placeholder="ABV" />
          <Button style={addKegButtonStyles} 
          type="submit" 
          variant="dark">
          Add Keg</Button>
      </form>
    </React.Fragment>
  )
}

export default NewKegForm;