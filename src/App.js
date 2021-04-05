import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
    //.then((users) => console.log(users));
  }

  render() {
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const { monsters, searchField } = this.state; //destructuring

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
/*

<CardList monsters={this.state.monsters} />
//---SearchBox
<input
          type="search"
          placeholder="search monster"
          onChange={(e) =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            )
          }
        />

*/
