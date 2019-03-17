let component = ReasonReact.statelessComponent("Square");
let handleClick = (_event, _self) => Js.log("clicked!");

let theDummyOnClick = (theRealFunction, event, self) => {
  theRealFunction(~inUnit=());
  ();
};

let make = (~clickHandler, ~xo, _children) => {
  ...component,
  render: self =>
    <div onClick=clickHandler>
      {switch (xo) {
       | Types.Empty => ReasonReact.string("")
       | Types.X => ReasonReact.string("X")
       | Types.O => ReasonReact.string("O")
       }}
    </div>,
};