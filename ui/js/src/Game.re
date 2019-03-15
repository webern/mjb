type squareValue =
  | Empty
  | X
  | O;

type squareValues = array(squareValue);

type state = {
  history: array(squareValues),
  stepNumber: int,
  xIsNext: bool,
};

type action =
  | Click(int);

let component = ReasonReact.reducerComponent("Game");

// let handleClick = (i, _event, _self) =>
//   Js.log("clicked! " ++ string_of_int(i));

let make = (~message, _children) => {
  ...component,

  initialState: () => {
    history: Array.make(1, Array.make(9, Empty)),
    stepNumber: 0,
    xIsNext: true,
  },

  reducer: (action, state) =>
    switch (action) {
    | Click(squareIndex) =>
      let current = Array.copy(state.history.last);
      current[squareIndex] = state.xIsNext ? X : O;
      // TODO - check the last squareValues array to see if someone already one,
      // state.history.last;

      // or if squareIndex is already used. if either -> return from function

      // make a copy of the last squareValues array, replaceing squareIndex

      // update the box for squareIndex

      // update the message to say 'X' is next, or 'X' is winner

      // set xIsNext

      // update the state

      // append a new squareValues to the history by
      let step = Array.length(state.history);
      ReasonReact.Update({...state, stepNumber: state.stepNumber + 1});
    },

  render: self =>
    <div onClick={self.send(Click(0))}>
      {ReasonReact.string(message)}
    </div>,
};