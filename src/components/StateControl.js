import React from "react";
import {v4} from "uuid";

class StateControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKeg: null,
      kegs: [
        {
          id: v4(),
          name: "Carina Peach Sour",
          brand: "Ecliptic",
          price: 700,//in pennies so we can avoid floating point errors
          abv: 5,
          pints: 124
        },
        {
          id: v4(),
          name: "Bud Light",
          brand: "Anheuser–Busch",
          price: 600,//in pennies so we can avoid floating point errors
          abv: 5,
          pints: 124
        },
        {
          id: v4(),
          name: "Pabst Blue Ribbon",
          brand: "Pabst Brewing Company",
          price: 600,//in pennies so we can avoid floating point errors
          abv: 4.8,
          pints: 124
        },
        {
          id: v4(),
          name: "Notorious Triple Ipa",
          brand: "Boneyard Beer Company",
          price: 800,//in pennies so we can avoid floating point errors
          abv: 12,
          pints: 100
        },
        {
          id: v4(),
          name: "Atlas Blackberry Cider",
          brand: "Atlas Cider Company",
          price: 700,//in pennies so we can avoid floating point errors
          abv: 6.2,
          pints: 64
        }
      ]
    };

    updateSelectedKeg = (keg) => {
      this.setState({selectedKeg: keg});
    };
    removePint = (keg) => {
      let newKegs = [...this.state.kegs];
      let kegToUpdate = newKegs.find(k => k.id === keg.id);

      if(kegToUpdate.pints === 1){
        newKegs.splice(
          newKegs.indexOf(kegToUpdate, 1));
      } else {
        kegToUpdate.pints -= 1;
      }
      
      this.setState({kegs: newKegs});
    }
  }
}