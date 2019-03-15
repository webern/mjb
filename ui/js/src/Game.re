type squareValue =
  | Empty
  | X
  | O;

// type squareValues = array(squareValue);

type state = {
  history: array(array(squareValue)),
  stepNumber: int,
  xIsNext: bool,
  message: string,
};

type action =
  | Click(int);

let component = ReasonReact.reducerComponent("Game");

// let handleClick = (i, _event, _self) =>
//   Js.log("clicked! " ++ string_of_int(i));

let handleClick = (squareIndex: int, state: state) => {
  state;
};

let make = (~message, _children) => {
  ...component,

  initialState: () => {
    history: Array.make(1, Array.make(9, X)),
    stepNumber: 0,
    xIsNext: true,
    message: "X is next!",
  },

  reducer: (action: action, state: state) =>
    switch (action) {
    | Click(squareIndex) =>
      ReasonReact.Update(handleClick(squareIndex, state))
    },

  render: self =>
    <div onClick={_event => self.send(Click(0))}>
      {ReasonReact.string(message)}
    </div>,
};