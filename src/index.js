import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const QUOTS = [
  { author: "abdelli nasredine", text: "I am the best text" },
  { author: "abdelli nasredine", text: "I am the best text 2" },
  { author: "abdelli nasredine", text: "I am the best text 3" },
  { author: "abdelli nasredine", text: "I am the best text 4" },
  { author: "abdelli nasredine", text: "I am the best text 5" }
];

class QuotMachine extends React.Component {
  constructor() {
    super();
    this.state = { quots: QUOTS, selectedIndx: this.random() };
    this.handleClick = this.handleClick.bind(this);
  }
  random() {
    return Math.floor(Math.random() * QUOTS.length);
  }
  handleClick() {
    this.setState({ selectedIndx: this.random() });
  }
  render() {
    const { quots, selectedIndx } = this.state;
    return (
      <div className="QuotMachine">
        <Quot quot={quots[selectedIndx]} />
        <div className="flex space-between">
          <Social />
          <button className="btn" onClick={this.handleClick}>
            Randomize
          </button>
        </div>
      </div>
    );
  }
}

function Quot(props) {
  const { text, author } = props.quot;
  return (
    <div className="Quot">
      <p className="Text">{text}</p>
      <span className="Author">{author}</span>
    </div>
  );
}

function Social() {
  return (
    <div className="Actions">
      <button className="btn">Share</button>
      <button className="btn">Like</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <QuotMachine />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
