import React from "react";
import Button from "react-bootstrap/Button";
import { v4 } from 'uuid';

function NewKegForm(props) {
  const centerButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  
  const insertDecimal = (price) => {
    return price.slice(0, price.length-2) + '.' + price.slice(price.length-2);
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
      <form onSubmit={handleAddKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Product'/>
        <input
          type='text'
          name='brand'
          placeholder='Brand'/>
        <input
          type='number'
          name='price'
          min='0'
          step='.01'
          placeholder='Price' />
        <input
          type='number'
          name='abv'
          min='0'
          step='.01'
          placeholder='ABV' />
        <div style={centerButton}>
          <Button type="submit" variant="dark">Add Keg</Button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default NewKegForm;