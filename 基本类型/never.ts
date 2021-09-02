// 接口：行为和动作的规范，对批量方法进行约束
interface data {
  x: number;
  y: number;
}

// 必须传入对象  x  y
function add(val: data): void {
  console.log(val.x + val.y);
}
function mul(val: data): void {
  console.log(val.x * val.y);
}
let c = { x: 4, y: 5 };
let b = { x: 4, y: 5, z: 6 };
add(c);
mul(b); //20
add({ x: 4, y: 5, z: 6 });
