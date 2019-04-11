'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var $$String = require("bs-platform/lib/js/string.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Config$ReasonReactExample = require("./config.bs.js");

function make_headers(token) {
  var content_type = /* tuple */[
    "content-type",
    "application/json"
  ];
  if (token !== undefined) {
    return /* array */[
            content_type,
            /* tuple */[
              "authorization",
              "Token " + token
            ]
          ];
  } else {
    return /* array */[content_type];
  }
}

function makeInit(method_, token, data) {
  var partial_arg = Js_primitive.some(make_headers(token));
  var partial_arg$1 = method_;
  var partial_arg$2 = Fetch.RequestInit[/* make */0];
  var defaultInit = function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8) {
    return partial_arg$2(partial_arg$1, partial_arg, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8);
  };
  if (data !== undefined) {
    return Curry.app(defaultInit, [
                Js_primitive.some(JSON.stringify(Js_primitive.valFromOption(data))),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                /* () */0
              ]);
  } else {
    return Curry.app(defaultInit, [
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                /* () */0
              ]);
  }
}

var toJson = Js_dict.fromList;

function parseUser(json) {
  return /* record */[
          /* id */Json_decode.field("id", Json_decode.$$int, json),
          /* email */Json_decode.field("email", Json_decode.string, json),
          /* createdAt */Json_decode.field("createdAt", Json_decode.string, json),
          /* updatedAt */Json_decode.field("updatedAt", Json_decode.string, json),
          /* username */Json_decode.field("username", Json_decode.string, json),
          /* bio */Json_decode.optional((function (param) {
                  return Json_decode.field("bio", Json_decode.string, param);
                }), json),
          /* image */Json_decode.optional((function (param) {
                  return Json_decode.field("image", Json_decode.string, param);
                }), json),
          /* token */Json_decode.field("token", Json_decode.string, json)
        ];
}

function parseNormalResp(json) {
  return /* record */[
          /* errors */undefined,
          /* user */Json_decode.field("user", parseUser, json)
        ];
}

function parseErrors(json) {
  return /* record */[
          /* email */Json_decode.optional((function (param) {
                  return Json_decode.field("email", (function (param) {
                                return Json_decode.array(Json_decode.string, param);
                              }), param);
                }), json),
          /* password */Json_decode.optional((function (param) {
                  return Json_decode.field("password", (function (param) {
                                return Json_decode.array(Json_decode.string, param);
                              }), param);
                }), json),
          /* username */Json_decode.optional((function (param) {
                  return Json_decode.field("username", (function (param) {
                                return Json_decode.array(Json_decode.string, param);
                              }), param);
                }), json)
        ];
}

function parseEmptyDefaultError() {
  return /* record */[
          /* id */0,
          /* email */"",
          /* createdAt */"",
          /* updatedAt */"",
          /* username */"",
          /* bio */undefined,
          /* image */undefined,
          /* token */""
        ];
}

function parseErrorResp(errors) {
  return /* record */[
          /* errors */errors,
          /* user : record */[
            /* id */0,
            /* email */"",
            /* createdAt */"",
            /* updatedAt */"",
            /* username */"",
            /* bio */undefined,
            /* image */undefined,
            /* token */""
          ]
        ];
}

function hasErrors(checkId) {
  return checkId !== undefined;
}

function tee(func, output) {
  Curry._1(func, output);
  return output;
}

function parseNewUser(responseText) {
  var json = JSON.parse(responseText);
  var possibleErrors = Json_decode.optional((function (param) {
          return Json_decode.field("errors", parseErrors, param);
        }), json);
  if (possibleErrors !== undefined) {
    return /* record */[
            /* errors */Js_primitive.valFromOption(possibleErrors),
            /* user : record */[
              /* id */0,
              /* email */"",
              /* createdAt */"",
              /* updatedAt */"",
              /* username */"",
              /* bio */undefined,
              /* image */undefined,
              /* token */""
            ]
          ];
  } else {
    return parseNormalResp(json);
  }
}

function getUserGraph(responseText) {
  var user = Js_option.andThen((function (prop) {
          return Js_primitive.undefined_to_opt(prop["user"]);
        }), Js_json.decodeObject(JSON.parse(responseText)));
  if (user !== undefined) {
    return Js_primitive.valFromOption(user);
  } else {
    return JSON.parse("{}");
  }
}

function checkForErrors(responseText) {
  return Js_option.andThen((function (prop) {
                return Js_primitive.undefined_to_opt(prop["errors"]);
              }), Js_json.decodeObject(JSON.parse(responseText)));
}

function convertErrorsToList(errorJson) {
  var decodedJson = Js_json.decodeObject(errorJson);
  if (decodedJson !== undefined) {
    var errorList = Js_primitive.valFromOption(decodedJson);
    var errorKeys = Object.keys(errorList);
    var errorValues = Js_dict.values(errorList);
    return $$Array.to_list($$Array.mapi((function (acc, errorField) {
                      var validationError = Caml_array.caml_array_get(errorValues, acc);
                      var frontCaps = $$String.capitalize(errorField);
                      return "" + (String(frontCaps) + (" " + (String(validationError) + "")));
                    }), errorKeys));
  } else {
    return /* [] */0;
  }
}

function registerNewUser(registerFunc, jsonData) {
  var request = makeInit(/* Post */2, undefined, Js_primitive.some(jsonData));
  return fetch(Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* Register */1), request).then((function (response) {
                return Promise.resolve(Curry._2(registerFunc, response.status, response.text()));
              }));
}

function constructUrl(url) {
  return Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(url);
}

function sendRequest(requestMethod, token, jsonData, actionFunc, url) {
  var request = makeInit(requestMethod, token, jsonData);
  return fetch(url, request).then((function (response) {
                return Promise.resolve(Curry._2(actionFunc, response.status, response.text()));
              }));
}

function authenticateUser(loginFunc, jsonData) {
  return sendRequest(/* Post */2, undefined, Js_primitive.some(jsonData), loginFunc, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* Authenticate */0));
}

function updateUser(updateUserFunc, jsonData, token) {
  return sendRequest(/* Put */3, token, Js_primitive.some(jsonData), updateUserFunc, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* UpdateUser */3));
}

function getCurrentUser(getUserFunc, token) {
  return sendRequest(/* Get */0, token, undefined, getUserFunc, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* CurrentUser */2));
}

function getMyArticles(getArticleFunc, name, token) {
  var urlAfterBase = Config$ReasonReactExample.apiUrlBase + (Config$ReasonReactExample.mapUrl(/* Articles */4) + ("?author=" + name));
  return sendRequest(/* Get */0, token, undefined, getArticleFunc, urlAfterBase);
}

function getFavoritedArticles(articleFunc, name, token) {
  var urlAfterBase = Config$ReasonReactExample.apiUrlBase + (Config$ReasonReactExample.mapUrl(/* Articles */4) + ("?favorited=" + name));
  return sendRequest(/* Get */0, token, undefined, articleFunc, urlAfterBase);
}

function getArticlesByTag(articleFunc, tagName, token) {
  var urlAfterBase = Config$ReasonReactExample.apiUrlBase + (Config$ReasonReactExample.mapUrl(/* Articles */4) + ("?tag=" + tagName));
  return sendRequest(/* Get */0, token, undefined, articleFunc, urlAfterBase);
}

function getGlobalArticles(getArticlesFunc, token, limit, offset) {
  var urlAfterBase = Config$ReasonReactExample.apiUrlBase + (Config$ReasonReactExample.mapUrl(/* Articles */4) + ("?limit=" + (String(limit) + ("&offset=" + String(offset)))));
  return sendRequest(/* Get */0, token, undefined, getArticlesFunc, urlAfterBase);
}

function getPoplarTags(getTagsFunc) {
  return sendRequest(/* Get */0, undefined, undefined, getTagsFunc, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* Tags */5));
}

function submitNewArticle(submissionResponse, jsonData, token) {
  return sendRequest(/* Post */2, token, Js_primitive.some(jsonData), submissionResponse, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* Articles */4));
}

function commentsForArticle(slug, commentsFunc) {
  return sendRequest(/* Get */0, undefined, undefined, commentsFunc, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* ArticleCommentBySlug */Block.__(5, [slug])));
}

function mutedResponse(_, _$1) {
  return /* () */0;
}

function deleteCommentForArticle(slug, commentId, token) {
  return sendRequest(/* Delete */4, token, undefined, mutedResponse, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* DeleteComment */Block.__(3, [
                    slug,
                    commentId
                  ])));
}

function followUser(username, token) {
  return sendRequest(/* Post */2, token, undefined, mutedResponse, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* Follow */Block.__(1, [username])));
}

function unFollowUser(username, token) {
  return sendRequest(/* Delete */4, token, undefined, mutedResponse, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* Unfollow */Block.__(2, [username])));
}

function getFeed(token, articleListFunc) {
  return sendRequest(/* Get */0, token, undefined, articleListFunc, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* Feed */6));
}

function favoriteArticle(token, slug) {
  return sendRequest(/* Post */2, token, undefined, mutedResponse, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* ArticleFavorite */Block.__(7, [slug])));
}

function unfavoriteArticle(token, slug) {
  return sendRequest(/* Delete */4, token, undefined, mutedResponse, Config$ReasonReactExample.apiUrlBase + Config$ReasonReactExample.mapUrl(/* ArticleFavorite */Block.__(7, [slug])));
}

exports.make_headers = make_headers;
exports.makeInit = makeInit;
exports.toJson = toJson;
exports.parseUser = parseUser;
exports.parseNormalResp = parseNormalResp;
exports.parseErrors = parseErrors;
exports.parseEmptyDefaultError = parseEmptyDefaultError;
exports.parseErrorResp = parseErrorResp;
exports.hasErrors = hasErrors;
exports.tee = tee;
exports.parseNewUser = parseNewUser;
exports.getUserGraph = getUserGraph;
exports.checkForErrors = checkForErrors;
exports.convertErrorsToList = convertErrorsToList;
exports.registerNewUser = registerNewUser;
exports.constructUrl = constructUrl;
exports.sendRequest = sendRequest;
exports.authenticateUser = authenticateUser;
exports.updateUser = updateUser;
exports.getCurrentUser = getCurrentUser;
exports.getMyArticles = getMyArticles;
exports.getFavoritedArticles = getFavoritedArticles;
exports.getArticlesByTag = getArticlesByTag;
exports.getGlobalArticles = getGlobalArticles;
exports.getPoplarTags = getPoplarTags;
exports.submitNewArticle = submitNewArticle;
exports.commentsForArticle = commentsForArticle;
exports.mutedResponse = mutedResponse;
exports.deleteCommentForArticle = deleteCommentForArticle;
exports.followUser = followUser;
exports.unFollowUser = unFollowUser;
exports.getFeed = getFeed;
exports.favoriteArticle = favoriteArticle;
exports.unfavoriteArticle = unfavoriteArticle;
/* Js_dict Not a pure module */
