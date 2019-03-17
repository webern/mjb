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
};