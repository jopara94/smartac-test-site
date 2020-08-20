import React, { Component } from "react";
import "./Facts.css";
import FactData from "../Component/facts.json";
class Facts extends Component {
  render() {
    return (
      <div className="facts">
      <h2>Fun Facts About Texas</h2>
        <div>
          <ul>
            <li>{FactData.facts[0]}</li>
            <li>{FactData.facts[1]}</li>
            <li>{FactData.facts[2]}</li>
            <li>{FactData.facts[3]}</li>
            <li>{FactData.facts[4]}</li>
            <li>{FactData.facts[5]}</li>
            <li>{FactData.facts[6]}</li>
            <li>{FactData.facts[7]}</li>
            <li>{FactData.facts[8]}</li>
            <li>{FactData.facts[9]}</li>
            <li>{FactData.facts[10]}</li>
            <li>{FactData.facts[11]}</li>
            <li>{FactData.facts[12]}</li>
            <li>{FactData.facts[13]}</li>
            <li>{FactData.facts[14]}</li>
            <li>{FactData.facts[15]}</li>
            <li>{FactData.facts[16]}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Facts;
