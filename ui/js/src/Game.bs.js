// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Board$ReactTemplate = require("./Board.bs.js");

var component = ReasonReact.reducerComponent("Game");

function calculateWinner(currentBoard) {
  return /* X */1;
}

function createMessage(xIsNext) {
  if (xIsNext) {
    return "X is next";
  } else {
    return "O is next";
  }
}

function sdfgsdgsdfg(i, $$event, self) {
  return /* () */0;
}

function handleClick(squareIndex, state) {
  var currentBoard = Caml_array.caml_array_get(state[/* history */0], state[/* history */0].length - 1 | 0);
  var match = state[/* xIsNext */2];
  Caml_array.caml_array_set(currentBoard, squareIndex, match ? /* X */1 : /* O */2);
  var currentBoardArr = /* array */[currentBoard];
  var newHistory = $$Array.append(state[/* history */0], currentBoardArr);
  var newStepNumber = state[/* stepNumber */1] + 1 | 0;
  var newXIsNext = !state[/* xIsNext */2];
  var newMessage = newXIsNext ? "X is next" : "O is next";
  return /* record */[
          /* history */newHistory,
          /* stepNumber */newStepNumber,
          /* xIsNext */newXIsNext,
          /* message */newMessage
        ];
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
                          className: "xxx"
                        }, ReasonReact.element(undefined, undefined, Board$ReactTemplate.make(Caml_array.caml_make_vect(9, /* Empty */0), sdfgsdgsdfg, /* array */[])));
            }),
          /* initialState */(function (param) {
              return /* record */[
                      /* history */Caml_array.caml_make_vect(1, Caml_array.caml_make_vect(9, /* Empty */0)),
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
exports.calculateWinner = calculateWinner;
exports.createMessage = createMessage;
exports.sdfgsdgsdfg = sdfgsdgsdfg;
exports.handleClick = handleClick;
exports.make = make;
/* component Not a pure module */
