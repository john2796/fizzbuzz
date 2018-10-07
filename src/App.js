import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    let Val = this.props.value;
    if (Val % 3 === 0) {
      Val = <div>Buzz</div>;
    } else if (Val % 10 === 0) {
      Val = <div>Fizz</div>;
    } else if (Val % 14 === 0) {
      Val = <div>FizzBuzz</div>;
    }

    return (
      <div className="App">
        <h1>{Val}</h1>
        <div>
          <button onClick={this.props.onIncrement}>Increment</button>
        </div>
        <div>
          <button onClick={this.props.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.val
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
