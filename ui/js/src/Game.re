type squareValue =
  | Empty
  | X
  | O;

type squareValues = array(squareValue);

type state = {
  history: array(squareValues),
  stepNumber: int,
  xIsNext: bool,
  message: string,
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
    message: "X is next!",
  },

  reducer: (action, state) =>
    switch (action) {
    | Click(squareIndex) =>
      //   // make a copy of the last squareValues array
      //   let current = Array.copy(state.history.last);

      //   // TODO - check the last squareValues array to see if someone already one,
      //   // state.history.last;

      //   // TODO - or if squareIndex is already used. if either -> return from function

      //   // set value at squareIndex
      //   current[squareIndex] = state.xIsNext ? X : O;

      //   // update the message to say 'X' is next, or 'X' is winner
      //   // let winnerIs = Empty;

      //   // set xIsNext
      //   xIsNext = !state.xIsNext;
      //   let whoIsNextMessage = xIsNext ? "X is next!" : "O is next!";

      //   // update the state

      //   // append a new squareValues to the history by
      //   let step = Array.length(state.history);
      ReasonReact.Update(
        {
          // ...state,
          // stepNumber: step,
          // xIsNext,
          // message: whoIsNextMessage,
          state;
        },
      )
    },

  render: self =>
    <div onClick={self.send(Click(0))}>
      {ReasonReact.string(message)}
    </div>,
};