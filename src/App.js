import React from "react";
import axios from "axios"; //to make get request

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  //most import lifecylce method - executes at render of our component
  componentDidMount() {
    this.fetchAdvice();
  }

  //method: functoin that belongs to a class
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });

        //console.log(advice); //destructure response
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
