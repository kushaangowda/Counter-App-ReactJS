import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import { render } from "@testing-library/react";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App-constructor");
    //here u can initialize state using this.state
    // this.state = {
    //   counters: [
    //     { id: 1, value: 1 },
    //     { id: 2, value: 2 },
    //     { id: 3, value: 3 },
    //     { id: 4, value: 4 },
    //   ],
    // };
  }

  componentDidMount() {
    //AJAX Call
    console.log("App-Mounted");
  }

  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={(counter) => this.handleIncrement(counter)}
            onDelete={(Id) => this.handleDelete(Id)}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //clone this.state.counters to counters
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    console.log("Deleting ", counterId, "...");
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };
}

export default App;
