import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      renderBall: true,
      ballPosition: { left: "0px" }
    });
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        const currentPosition = parseInt(this.state.ballPosition.left);
        const newPosition = currentPosition + 5;
        this.setState({
          ballPosition: { left: newPosition + "px" }
        });
      }
    });
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;

