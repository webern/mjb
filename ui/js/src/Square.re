let component = ReasonReact.statelessComponent("Square");
let handleClick = (_event, _self) => Js.log("clicked!");

let make = (~onClick, ~xo, _children) => {
  ...component,
  render: self =>
    <div onClick={self.handle(onClick)}>
      {switch (xo) {
       | Types.Empty => ReasonReact.string("")
       | Types.X => ReasonReact.string("X")
       | Types.O => ReasonReact.string("O")
       }}
    </div>,
};