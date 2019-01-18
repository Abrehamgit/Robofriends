import React, { Component } from "react";
import CardList from "../components/CardList";
import robots from "../robots";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(result => this.setState(() => ({ robots: result })));
  }
  searchChange = event => {
    this.setState({ searchField: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <p className="header"> Robofriends </p>
        <SearchBox searchChange={this.searchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
