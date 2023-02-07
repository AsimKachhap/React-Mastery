const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const counterSubsciber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubsciber);

store.dispatch({ type: "INCREMENT" });
