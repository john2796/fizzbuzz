const initialState = {
  val: 1
};

// onIncrement = () => {
//   this.setState({
//     val: this.state.val + 1
//   });
// };

// onDecrement = () => {
//   const val = this.state.val;
//   this.setState({ val: val - 1 });
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        val: state.val + 1
      };
    case "DECREMENT":
      return {
        ...state,
        val: state.val - 1
      };
    default:
      return state;
  }
};

export default reducer;
