module Styles = {
  /* Open the Css module, so we can access the style properties below without prefixing them with Css. */
  open Css;

  let card =
    style([
      display(flexBox),
      flexDirection(column),
      alignItems(stretch),
      backgroundColor(white),
      boxShadow(~y=px(3), ~blur=px(5), rgba(0, 0, 0, 0.3)),
      /* You can add non-standard and other unsafe style declarations using the `unsafe` function, with strings as the two arguments. */
      unsafe("-webkit-overflow-scrolling", "touch"),
      // /* You can place all your theme styles in Theme.re and access as normal Reason module */
      // padding(Theme.basePadding),
    ]);

  let title =
    style([
      fontSize(rem(1.5)),
      // color(Theme.textColor),
      // marginBottom(Theme.basePadding),
    ]);

  let actionButton = disabled =>
    style([
      background(disabled ? darkgray : white),
      color(black),
      border(px(1), solid, black),
      borderRadius(px(3)),
    ]);

  let ol = style([unsafe("padding-left", "30px")]);
  let ul = style([unsafe("padding-left", "30px")]);
};

// Css.global("body", [Css.fontSize(Css.px(14)), Css.Emotion.]);

/*
 // body {
 //   font: 14px "Century Gothic", Futura, sans-serif;
 //   margin: 20px;
 // }

 // ol, ul {
 //   padding-left: 30px;
 // }

 // .board-row:after {
 //   clear: both;
 //   content: "";
 //   display: table;
 // }

 // .status {
 //   margin-bottom: 10px;
 // }

 // .square {
 //   background: #fff;
 //   border: 1px solid #999;
 //   float: left;
 //   font-size: 24px;
 //   font-weight: bold;
 //   line-height: 34px;
 //   height: 34px;
 //   margin-right: -1px;
 //   margin-top: -1px;
 //   padding: 0;
 //   text-align: center;
 //   width: 34px;
 // }

 // .square:focus {
 //   outline: none;
 // }

 // .kbd-navigation .square:focus {
 //   background: #ddd;
 // }

 // .game {
 //   display: flex;
 //   flex-direction: row;
 // }

 // .game-info {
 //   margin-left: 20px;
 // }
 */