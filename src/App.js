import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Piyush",
      monsters: [
        {
          name: "Frankinstine",
          id: "a001",
        },
        {
          name: "Dracula",
          id: "a002",
        },
        {
          name: "Zombiee",
          id: "a003",
        },
      ],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
    //.then((users) => console.log(users));
  }

  render() {    
    return (
      <div className="App">        
        <header className="App-header">
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello Patel" })}>
            Change Text
          </button>
        </header>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
