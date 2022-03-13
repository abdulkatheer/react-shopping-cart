import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Counters from "./components/counters";
import NavBar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 9 },
      { id: 4, value: 12 },
    ],
  };

  constructor() {
    super();
    console.log("App Component - constructor");
  }

  componentDidMount() {
    console.log("App Component - mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App -> prevState", prevState);
    console.log("App -> currState", this.state);
  }

  render() {
    console.log("App Component - render");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }

  handleDelete = (counterId) => {
    let counters = this.state.counters.filter((c) => c.id !== counterId); // creating new array object
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // creating new array object
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // creating new object
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; // creating new array object
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // creating new object
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => ({
      ...counter,
      value: 0,
    })); // creating new array with new objects
    this.setState({ counters });
  };
}

export default App;
