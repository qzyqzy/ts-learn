"use strict";
var tuple;
// 赋值时个数与类型要与定义时一致
tuple = [1, "2"];
// tuple.push(false); 错误
// push 时只要是定义的类型才可以
tuple.push(1, 2, 3);
