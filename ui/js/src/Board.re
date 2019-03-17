let component = ReasonReact.statelessComponent("Component1");
//let handleClick = (_event, _self) => Js.log("clicked!");

let renderSquare = (i: int, squares, clickHandler) => {
  <Square xo={Array.get(squares, i)} onClick={clickHandler(i)} />;
};

let make = (~squares, ~clickHandler, _children) => {
  ...component,
  render: self =>
    <div>
      <div className="board-row">
        {renderSquare(0, squares, clickHandler)}
        {renderSquare(1, squares, clickHandler)}
        {renderSquare(2, squares, clickHandler)}
      </div>
      <div className="board-row">
        {renderSquare(3, squares, clickHandler)}
        {renderSquare(4, squares, clickHandler)}
        {renderSquare(5, squares, clickHandler)}
      </div>
      <div className="board-row">
        {renderSquare(6, squares, clickHandler)}
        {renderSquare(7, squares, clickHandler)}
        {renderSquare(8, squares, clickHandler)}
      </div>
    </div>,
};