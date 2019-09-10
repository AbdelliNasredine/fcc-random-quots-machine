import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const QUOTS = [
  { author: "Author n°1", text: "I am a quot n°1" },
  { author: "Author n°2", text: "I am a quot n°2" },
  { author: "Author n°3", text: "I am a quot n°3" },
  { author: "Author n°4", text: "I am a quot n°4" },
  { author: "Author n°5", text: "I am a quot n°5" }
];

class QuotMachine extends React.Component {
  constructor() {
    super();
    this.state = { quots: QUOTS, selectedIndx: this.random() };
    this.handleClickRandomize = this.handleClickRandomize.bind(this);
  }
  random() {
    return Math.floor(Math.random() * QUOTS.length);
  }
  handleClickRandomize() {
    this.setState({ selectedIndx: this.random() });
  }
  render() {
    const { quots, selectedIndx } = this.state;
    const displyedQuot = quots[selectedIndx];
    const tweetLink = `https://twitter.com/intent/tweet?text=${
      displyedQuot.text
    }`;
    return (
      <div className="QuotMachine">
        <Quot quot={displyedQuot} />
        <div className="flex space-between">
          <a className="btn btn-tweet" href={tweetLink}>
            Tweet
          </a>
          <button className="btn" onClick={this.handleClickRandomize}>
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

function App() {
  return (
    <div className="App">
      <QuotMachine />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
