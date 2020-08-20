import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Facts from "./Component/Facts";
import About from "./Component/About";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.about = this.about.bind(this);
    this.fact = this.fact.bind(this);
  }


  about() {
    document.getElementById("about-comp").style.display = "block";
    document.getElementById("facts-comp").style.display = "none";
    document.getElementById("facts-btn").style.color = "blue";
    document.getElementById("about-btn").style.color = "black";
  }

  fact() {
    document.getElementById("about-comp").style.display = "none";
    document.getElementById("facts-comp").style.display = "block";
    document.getElementById("about-btn").style.color = "blue";
    document.getElementById("facts-btn").style.color = "black";
  }

  render() {

    return (
      <div className="App">
        <header fluid className="appHeader">
          <div className="header-image">
            <img
              id="texas-header"
              src="./assets/tx-logo.png"
              alt="texas logo"
            ></img>
            <h3>Texas</h3>
          </div>
          <div className="headerLinks">
            <button id="about-btn" onClick={this.about}>About</button>
            <button id="facts-btn" onClick={this.fact}>Facts</button>
          </div>
        </header>
        <hr></hr>
        <div id="about-comp" className="AboutComp">{<About/>}</div>
        <div id="facts-comp" className="FactsComp">{<Facts/>}</div>
      </div>
    );
  }
}

export default App;
