open Css;

// let baseRules = [
// 	display(flexBox),
// 	flexDirection(column),
// 	alignItems(stretch),
// 	backgroundColor(rgb(21,0,2)),
// 	// boxShadow(~y=px(3), ~blur=px(5), rgba(0,0,0,0.3)),
// 	/* You can add non-standard and other unsafe style declarations using the `unsafe` function, with strings as the two arguments. */
//     // unsafe("-webkit-overflow-scrolling", "touch"),
//     /* You can place all your theme styles in Theme.re and access as normal Reason module */
//     // padding(Theme.basePadding)
// ]

global("*", [boxSizing(borderBox)]);

let body = style([
    display(flexBox),
    minHeight(vh(100.)),
    flexDirection(row),
    margin(px(0)),
  ]);

let col1 = style([
	  background(hex("#D7E8D4")),
	  flex(1.),
	]);

// .col-1 {
//   background: #D7E8D4;
//   flex: 1;
// }

// .col-2 {
//   display: flex;
//   flex-direction: column;
//   flex: 5;
// }

// .content {
//   display: flex;
//   flex-direction: row;
// }

// .content > .article {
//   flex: 4;
//   min-height: 60vh;
// }

// .header, .footer {
//   background: yellowgreen;
//   height: 20vh;
// }

// .header, .footer, .article, .nav {
//   padding: 1em;
// }