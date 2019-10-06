/* State declaration */
type state = {
  count: int,
  show: bool,
};

let defaultState = {count: 0, show: true};

/* Action declaration */
type action =
  | Click
  | Toggle;

let stateReducer = (state, action) =>
  switch (action) {
  | Click => {...state, count: state.count + 1}
  | Toggle => {...state, show: ! state.show}
  };

let createMessage = (count) =>
    "You've clicked this " ++ string_of_int(count) ++ " times(s)";


[@react.component]
let make = (~greeting) => {
  // deal with state and business logic
  let (state, dispatch) = React.useReducer(stateReducer, defaultState);
  let message = createMessage(state.count);

  // produce the component with jsx
  <div>
    <button onClick={_event => dispatch(Click)}>
      {ReasonReact.string(message)}
    </button>
    <button onClick={_event => dispatch(Toggle)}>
      {ReasonReact.string("Toggle greeting")}
    </button>
    {state.show ? ReasonReact.string(greeting) : ReasonReact.null}
  </div>;
};
