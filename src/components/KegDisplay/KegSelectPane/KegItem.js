import React from "react";

function KegItem(props) {
  const kegItemStyles = {
    border: "1px solid black",
    width: "100%",
    marginBottom: ".3em",
    backgroundColor: "whiteSmoke"
  };
  const onClick = () => {
    props.updateSelectedKeg(props.keg);
  }
  return (
    <React.Fragment>
      <button onClick={onClick} style={kegItemStyles}>
        <h3>{props.keg.name}</h3>
      </button>
      <br/>
    </React.Fragment>
  );
}

export default KegItem;