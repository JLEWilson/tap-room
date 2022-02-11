import React from "react";
import KegItem from "./KegItem";
import NewKegButton from "./NewKegButton";

function KegSelectPane(props) {
  const KegSelectPaneStyles = {
    backgroundColor: "cyan"
  }

  return (
    <React.Fragment>
      <div style={KegSelectPaneStyles}>
        {props.kegs.map(keg => 
          <KegItem keg={keg}
          updateSelectedKeg={props.updateSelectedKeg}/>
        )}
      </div>
      <NewKegButton newKeg={props.addNewKeg}
      />
    </React.Fragment>
  )
}

export default KegSelectPane;