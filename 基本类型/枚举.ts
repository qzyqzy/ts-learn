enum Color {
  red,
  white,
}
// 默认为 0
console.log(Color.red); // 0
console.log(Color[0]); // red

// 也可以为其赋值
// 紧随的如果不赋值 就默认加 1
enum Color1 {
  red = 2,
  white,
}

console.log(Color1.red); // 2
