// type state = {
//   history: array(array(Types.squareValue)),
//   stepNumber: int,
//   xIsNext: bool,
//   message: string,
// };

// type action =
//   | Click(int);

let component = ReasonReact.reducerComponent("Auth");

// let calculateWinner = _currentBoard => {
//   Types.X;
//         // TODO - implement
// };

// let createMessage = (xIsNext: bool) => {
//   xIsNext ? "X is next" : "O is next";
// };

// let doTheWholeClickyThing = (~inMyself, ~inIndex: int, ~inUnit: unit) => {
//   inMyself.ReasonReact.send(Click(inIndex));
// };

// let handleClick = (~inIndex: int, ~inState: state) => {
//   let currentBoard = inState.history[Array.length(inState.history) - 1];
//   currentBoard[inIndex] = inState.xIsNext ? X : O;
//   let currentBoardArr = [|currentBoard|];
//   let newHistory = Array.append(inState.history, currentBoardArr);
//   let newStepNumber = inState.stepNumber + 1;
//   let newXIsNext = !inState.xIsNext;
//   let newMessage = createMessage(newXIsNext);
//   {
//     history: newHistory,
//     stepNumber: newStepNumber,
//     xIsNext: newXIsNext,
//     message: newMessage,
//   };
// };

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

let make = _children => {
  ...component,

  // initialState: () => {
  //   history: Array.make(1, Array.make(9, Types.Empty)),
  //   stepNumber: 0,
  //   xIsNext: true,
  //   message: "X is next!",
  // },

  // reducer: (action: action, state: state) =>
  //   switch (action) {
  //   | Click(squareIndex) =>
  //     ReasonReact.Update(handleClick(squareIndex, state))
  //   },

  render: self => <div className="class-auth"> Yello Bisshop </div>,
};