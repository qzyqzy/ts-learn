// 写法1 仅包含数值
let arr1: number[] = [1, 2, 3];

// 写法2 仅包含数值
let arr2: Array<number> = [1, 2, 3];

// 写法3 多种数据类型
let arr3: Array<number | string> = [1, "2", "3"];

// 写法4 多种数据类型
// 注意括号不能省略 不然数据的类型为数字或者 仅包含字符串的数组
let arr4: (number | string)[] = [1, "2", "3"];
