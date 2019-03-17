// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("Game");

function handleClick(squareIndex, state) {
  return state;
}

function make(message, _children) {
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
          /* render */(function (self) {
              return React.createElement("div", {
                          onClick: (function (_event) {
                              return Curry._1(self[/* send */3], /* Click */[0]);
                            })
                        }, message);
            }),
          /* initialState */(function (param) {
              return /* record */[
                      /* history */Caml_array.caml_make_vect(1, Caml_array.caml_make_vect(9, /* X */1)),
                      /* stepNumber */0,
                      /* xIsNext */true,
                      /* message */"X is next!"
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              return /* Update */Block.__(0, [handleClick(action[0], state)]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.handleClick = handleClick;
exports.make = make;
/* component Not a pure module */
