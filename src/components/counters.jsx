import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters Component - constructor");
  }

  componentDidMount() {
    console.log("Counters Component - mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counters -> prevProps", prevProps);
    console.log("Counters -> currProps", this.props);
  }

  render() {
    console.log("Counters Component - render");
    const { counters, onDelete, onIncrement, onDecrement, onReset } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
