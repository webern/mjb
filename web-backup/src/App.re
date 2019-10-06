[@react.component]
let make = () => {
  <div>
    <LeftSide />
    <div className="col-2">
      <div className="header">{ReasonReact.string("Header")}</div>
      <div className="main content">
      	<div className="article">
	      <Component1 message="Hi" />
	      <Component2 greeting="Greeting" />
	    </div>
	  </div>
    </div>
  </div>;
 };