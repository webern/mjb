// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/bs-jest/src/jest.js";
import * as App$Mjb from "../app.bs.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as ReactTestingLibrary from "bs-react-testing-library/src/ReactTestingLibrary.bs.js";

Jest.describe("App component", (function (param) {
        Jest.test("renders without crashing", (function (param) {
                var wrapper = ReactTestingLibrary.render(undefined, undefined, ReasonReact.element(undefined, undefined, App$Mjb.make(/* array */[])));
                var partial_arg = /* `Str */[
                  4153489,
                  "A place to share your knowledge."
                ];
                var actual = (function (eta) {
                      var param = undefined;
                      var param$1 = eta;
                      return ReactTestingLibrary.getByText(partial_arg, param, param$1);
                    })(wrapper).textContent;
                return Jest.Expect[/* toEqual */12]("A place to share your knowledge.", Jest.Expect[/* expect */0](actual));
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
