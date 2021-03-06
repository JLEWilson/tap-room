import React from "react";
import KegItem from "./KegItem";
import NewKegButton from "./NewKegButton";

function KegSelectPane(props) {
  const kegSelectPaneStyles = {
    backgroundColor: " #A7BEA9",
    padding: "1em"
  }
  return (
    <React.Fragment>
      <div style={kegSelectPaneStyles}>
        {props.kegs.map(keg => 
          <KegItem keg={keg}
          key={keg.id}
          updateSelectedKeg={props.updateSelectedKeg}/>
          )}
      </div>
      <NewKegButton newKeg={props.updateCurrentPage}
      />
    </React.Fragment>
  )
}

export default KegSelectPane;