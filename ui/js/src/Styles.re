// font name strings
let centuryGothic = "Century Gothic";
let futura = "Futura";
let sansSerif = "sans-serif";
let quote = str => "\"" ++ str ++ "\"";

let fontFamiliesGlobal = [centuryGothic, futura, sansSerif];
let fontFamiliesGlobalStr =
  List.fold_left(
    (a, b) => quote(a) ++ ", " ++ quote(b),
    List.hd(fontFamiliesGlobal),
    List.tl(fontFamiliesGlobal),
  );
let fontSizeGlobalPx = 14.0;
let fontGlobalStr =
  string_of_float(fontSizeGlobalPx) ++ "px " ++ fontFamiliesGlobalStr;

let fontGlobal = () => {
  ReactDOMRe.Style.make(~font=fontGlobalStr, ());
};

/*
 body {
   font: 14px "Century Gothic", Futura, sans-serif;
   margin: 20px;
 }

 ol, ul {
   padding-left: 30px;
 }

 .board-row:after {
   clear: both;
   content: "";
   display: table;
 }

 .status {
   margin-bottom: 10px;
 }

 .square {
   background: #fff;
   border: 1px solid #999;
   float: left;
   font-size: 24px;
   font-weight: bold;
   line-height: 34px;
   height: 34px;
   margin-right: -1px;
   margin-top: -1px;
   padding: 0;
   text-align: center;
   width: 34px;
 }

 .square:focus {
   outline: none;
 }

 .kbd-navigation .square:focus {
   background: #ddd;
 }

 .game {
   display: flex;
   flex-direction: row;
 }

 .game-info {
   margin-left: 20px;
 }

 */