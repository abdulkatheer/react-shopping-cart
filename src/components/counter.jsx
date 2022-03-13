import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("Counter Component - constructor");
  }

  componentDidMount() {
    console.log("Counter Component - mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter -> prevProps", prevProps);
    console.log("Counter -> currProps", this.props);
  }

  componentWillUnmount() {
    console.log("Counter -> unmount");
  }

  render() {
    console.log("Counter Component - render");
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.getCount()}</span>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.isCountLessThanZero()}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let badegClasses = ["badge", "m-2"];
    if (this.props.counter.value === 0) {
      badegClasses.push("badge-warning");
    } else {
      badegClasses.push("badge-primary");
    }
    return badegClasses.join(" ");
  }

  isCountLessThanZero() {
    return this.props.counter.value <= 0;
  }

  getCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
