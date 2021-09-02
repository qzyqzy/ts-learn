"use strict";
// 必须传入对象  x  y
function add(val) {
    console.log(val.x + val.y);
}
function mul(val) {
    console.log(val.x * val.y);
}
var c = { x: 4, y: 5 };
var b = { x: 4, y: 5, z: 6 };
add(c);
mul(b); //20
add({ x: 4, y: 5, z: 6 });
