'use strict';


function mapUrl(url) {
  if (typeof url === "number") {
    switch (url) {
      case 0 : 
          return "/users/login";
      case 1 : 
          return "/users";
      case 2 : 
      case 3 : 
          return "/user";
      case 4 : 
          return "/articles";
      case 5 : 
          return "/tags";
      case 6 : 
          return "/articles/feed";
      
    }
  } else {
    switch (url.tag | 0) {
      case 0 : 
          return "/profiles/" + url[0];
      case 1 : 
      case 2 : 
          return "/profiles/" + (url[0] + "/follow");
      case 3 : 
          return "/articles/" + (url[0] + ("/comments/" + String(url[1])));
      case 4 : 
          return "/articles/" + url[0];
      case 5 : 
          return "/articles/" + (url[0] + "/comments");
      case 6 : 
          var match = url[0];
          return "/articles/" + (match[0] + ("/comments/" + match[1]));
      case 7 : 
      case 8 : 
          return "/articles/" + (url[0] + "/favorite");
      
    }
  }
}

var apiUrlBase = "https://conduit.productionready.io/api";

exports.apiUrlBase = apiUrlBase;
exports.mapUrl = mapUrl;
/* No side effect */
