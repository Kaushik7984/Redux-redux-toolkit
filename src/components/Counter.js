// import { Component } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch /*,connect*/ } from "react-redux"; //step-3
import { counterAction } from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch(); //st-6
  // const counter = useSelector((state) => state.counter); //step-4
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterAction.increment());
  };

  const increseHandler = () => {
    // dispatch({ type: "increse", amount: 5 });
    dispatch(counterAction.increse(5)); //{ type: SOME_UNIQE_IDENTIFIER, payload: }
  };
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterAction.togglecounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {show && (
        <div className={classes.value}>
          {counter}
          {/* -- COUNTER VALUE --st-5 */}
        </div>
      )}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class based Component

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();

//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// };

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
