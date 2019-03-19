// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Square");

function handleClick(_event, _self) {
  console.log("clicked!");
  return /* () */0;
}

function theDummyOnClick(theRealFunction, $$event) {
  Curry._1(theRealFunction, /* () */0);
  return /* () */0;
}

function make(clickHandler, xo, _children) {
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
              var tmp;
              switch (xo) {
                case 0 : 
                    tmp = "";
                    break;
                case 1 : 
                    tmp = "X";
                    break;
                case 2 : 
                    tmp = "O";
                    break;
                
              }
              return React.createElement("button", {
                          className: "square",
                          onClick: (function (param) {
                              Curry._1(clickHandler, /* () */0);
                              return /* () */0;
                            })
                        }, tmp);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.handleClick = handleClick;
exports.theDummyOnClick = theDummyOnClick;
exports.make = make;
/* component Not a pure module */
