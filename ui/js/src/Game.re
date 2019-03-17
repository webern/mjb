type state = {
  history: array(array(Types.squareValue)),
  stepNumber: int,
  xIsNext: bool,
  message: string,
};

type action =
  | Click(int);

let component = ReasonReact.reducerComponent("Game");

let calculateWinner = currentBoard => {
  Types.X;
        // TODO - implement
};

let createMessage = (xIsNext: bool) => {
  xIsNext ? "X is next" : "O is next";
};

let sdfgsdgsdfg = (i, event, self) => {
  ();
};

let handleClick = (squareIndex: int, state: state) => {
  let currentBoard = state.history[Array.length(state.history) - 1];
  currentBoard[squareIndex] = state.xIsNext ? X : O;
  let currentBoardArr = [|currentBoard|];
  let newHistory = Array.append(state.history, currentBoardArr);
  let newStepNumber = state.stepNumber + 1;
  let newXIsNext = !state.xIsNext;
  let newMessage = createMessage(newXIsNext);
  {
    history: newHistory,
    stepNumber: newStepNumber,
    xIsNext: newXIsNext,
    message: newMessage,
  };
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
    history: Array.make(1, Array.make(9, Types.Empty)),
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
    <div className="xxx">
      <Board squares={Array.make(9, Types.Empty)} clickHandler=sdfgsdgsdfg />
    </div>,
};