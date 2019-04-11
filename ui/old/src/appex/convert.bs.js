'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function formatError(fieldName, value) {
  if (value !== undefined) {
    return $$Array.map((function (errorMessage) {
                  var fieldName$1 = fieldName;
                  var fieldValue = errorMessage;
                  return fieldName$1 + (" " + fieldValue);
                }), value);
  } else {
    return /* array */[""];
  }
}

function toErrorListFromResponse(errorGraph) {
  var match = errorGraph[/* errors */0];
  if (match !== undefined) {
    var errors = match;
    return Pervasives.$at($$Array.to_list(formatError("Email", errors[/* email */0])), Pervasives.$at($$Array.to_list(formatError("Username", errors[/* username */2])), $$Array.to_list(formatError("Password", errors[/* password */1]))));
  } else {
    return /* [] */0;
  }
}

exports.formatError = formatError;
exports.toErrorListFromResponse = toErrorListFromResponse;
/* No side effect */
