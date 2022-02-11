import React from "react"
import SellPintButton from "./SellPintButton";
import ReStockButton from "./ReStockButton";

function SelectedKegPane(props) {
  const selectProductPaneStyles = {
    padding: '1em',
    border: '1px solid black',
    backgroundColor: '#A7BEA9',
    textAlign: "center"
  }
  const companyStyle = {
    fontStyle: "italic"
  }
  return (
    <React.Fragment>
    <div style={selectProductPaneStyles}>
      <h2>"{props.selectedKeg.name}"</h2>
      <h4 style={companyStyle}>{props.selectedKeg.brand}</h4>
      <h4>ABV: {props.selectedKeg.abv}</h4>
      <h4>Price per pint: {props.selectedKeg.price}</h4>
      <h4>Pints remaining: {props.selectedKeg.pints}</h4>
    </div>
    <SellPintButton/>
    <ReStockButton/>
    </React.Fragment>
  )
}

export default SelectedKegPane;