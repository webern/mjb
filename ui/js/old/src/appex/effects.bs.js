'use strict';

var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function saveTokenToStorage(value) {
  localStorage.setItem("jwt", value);
  return /* () */0;
}

function getTokenFromStorage() {
  return Js_primitive.null_to_opt(localStorage.getItem("jwt"));
}

function saveUserToStorage(username, bio, image) {
  localStorage.setItem("username", username);
  localStorage.setItem("image", image);
  if (bio !== undefined) {
    localStorage.setItem("bio", bio);
    return /* () */0;
  } else {
    return /* () */0;
  }
}

function getUserFromStorage() {
  return /* tuple */[
          Js_primitive.null_to_opt(localStorage.getItem("username")),
          Js_primitive.null_to_opt(localStorage.getItem("bio")),
          Js_primitive.null_to_opt(localStorage.getItem("image"))
        ];
}

exports.saveTokenToStorage = saveTokenToStorage;
exports.getTokenFromStorage = getTokenFromStorage;
exports.saveUserToStorage = saveUserToStorage;
exports.getUserFromStorage = getUserFromStorage;
/* No side effect */
