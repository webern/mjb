'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Footer");

function show(prim) {
  return prim;
}

function conduit_message() {
  return React.createElement("div", undefined, "An interactive learning project from ", React.createElement("a", {
                  href: "https://thinkster.io"
                }, "Thinkster"), ". Code &amp; design licensed under MIT.");
}

function make() {
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
          /* render */(function () {
              return React.createElement("footer", undefined, React.createElement("div", {
                              className: "container"
                            }, React.createElement("a", {
                                  className: "logo-font",
                                  href: "/"
                                }, "conduit"), React.createElement("span", {
                                  className: "attribution"
                                }, conduit_message(/* () */0))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.show = show;
exports.conduit_message = conduit_message;
exports.make = make;
/* component Not a pure module */
