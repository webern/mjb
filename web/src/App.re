[@react.component]
let make = () => {
  <div className="root">
    <div className="leftcol"> {ReasonReact.string("Let Column")} </div>
    <div className="maincol"> {ReasonReact.string("Main Column")} </div>
  </div>;
};