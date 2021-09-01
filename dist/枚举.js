"use strict";
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["white"] = 1] = "white";
})(Color || (Color = {}));
// 默认为 0
console.log(Color.red); // 0
console.log(Color[0]); // red
// 也可以为其赋值
// 紧随的如果不赋值 就默认加 1
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 2] = "red";
    Color1[Color1["white"] = 3] = "white";
})(Color1 || (Color1 = {}));
console.log(Color1.red); // 2
