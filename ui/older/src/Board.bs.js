// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Square$ReactTemplate = require("./Square.bs.js");

var component = ReasonReact.statelessComponent("Board");

function renderSquare(i, squares, clickHandler) {
  return ReasonReact.element(undefined, undefined, Square$ReactTemplate.make(Curry._1(clickHandler, i), Caml_array.caml_array_get(squares, i), /* array */[]));
}

function make(squares, clickHandler, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", undefined, React.createElement("div", {
                              className: "board-row"
                            }, renderSquare(0, squares, clickHandler), renderSquare(1, squares, clickHandler), renderSquare(2, squares, clickHandler)), React.createElement("div", {
                              className: "board-row"
                            }, renderSquare(3, squares, clickHandler), renderSquare(4, squares, clickHandler), renderSquare(5, squares, clickHandler)), React.createElement("div", {
                              className: "board-row"
                            }, renderSquare(6, squares, clickHandler), renderSquare(7, squares, clickHandler), renderSquare(8, squares, clickHandler)));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.renderSquare = renderSquare;
exports.make = make;
/* component Not a pure module */
