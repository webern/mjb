let component = ReasonReact.statelessComponent("Square");
let handleClick = (_event, _self) => Js.log("clicked!");

let theDummyOnClick = (theRealFunction, event) => {
  theRealFunction(~inUnit=());
  ();
};

let make = (~clickHandler, ~xo, _children) => {
  ...component,
  render: self =>
    <div onClick={theDummyOnClick(clickHandler)}>
      {switch (xo) {
       | Types.Empty => ReasonReact.string("")
       | Types.X => ReasonReact.string("X")
       | Types.O => ReasonReact.string("O")
       }}
    </div>,
};