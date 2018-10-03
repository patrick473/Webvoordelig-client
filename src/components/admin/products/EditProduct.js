import React, { PureComponent } from "react";
import axios from "axios";
import AdminProduct from "./Product";
import queryString from "query-string";

const exampleCard = {
    _id: "5b86e476a8228b3354bac2a4",
    category: "pokemon",
    name: "Granbull",
    set: "Great Encounters",
    quality: "near mint",
    rarity: "uncommon",
    holo: false,
    price: 650,
    collectorNumber: "39/106",
    extra: "",
    picture: "https://www.serebii.net/card/greatencounters/39.jpg",
    amount: 1
  };

class ProductList extends PureComponent {
  constructor(props) {
    super(props);
    
    
  }
  
  componentDidMount() {
   
  }
  render() {
    return (
      <div>
        HEKLK
      </div>
    );
  }
}

export default ProductList;
