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
  let currentBoard = state.history[Array.length(state.history)-1]

  state;
};

/* react version

     handleClick(i) {
       const history = this.state.history.slice(0, this.state.stepNumber + 1);
       const current = history[history.length - 1];
       const squares = current.squares.slice();
       if (calculateWinner(squares) || squares[i]) {
         return;
       }
       squares[i] = this.state.xIsNext ? "X" : "O";
       this.setState({
         history: history.concat([
           {
             squares: squares
           }
         ]),
         stepNumber: history.length,
         xIsNext: !this.state.xIsNext
       });
     }
   */

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