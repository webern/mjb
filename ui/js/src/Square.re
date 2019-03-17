let component = ReasonReact.statelessComponent("Square");
let handleClick = (_event, _self) => Js.log("clicked!");

let make = (~onClick, ~xo: Game.squareValue, _children) => {
  ...component,
  render: self =>
    <div onClick={self.handle(onClick)}>
      {switch (xo) {
       | Empty => ReasonReact.string("")
       | X => ReasonReact.string("X")
       | O => ReasonReact.string("O")
       }}
    </div>,
};