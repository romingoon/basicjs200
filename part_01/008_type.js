var x = 5; // 숫자형(Number)
console.log('🚀 ~ x', x, typeof x);

var y = 'five'; // 문자형(String)
console.log('🚀 ~ y', y, typeof y);

var isTrue = true; // 불린형(Boolean)
console.log('🚀 ~ isTrue', isTrue, typeof isTrue);

var empty = null; // null
console.log('🚀 ~ empty', empty, typeof empty);

var nothing; //undefined
console.log('🚀 ~ nothing', nothing, typeof empty);

var sym = Symbol('me'); // Symbol
console.log('🚀 ~ sym', sym, typeof sym);

var item = {
  price: 50000,
  count: 100,
}; // 객체(Object)
console.log('🚀 ~ item', item, typeof item);

var fruits = ['appel', 'melon', 'banana', 'orange']; // 배열(Array)
console.log('🚀 ~ fruits', fruits, typeof fruits);

var addFruit = function (fruit) {
  fruits.push(fruit);
}; // 함수(Function)
console.log('>>>addFruit', addFruit, typeof addFruit);
addFruit('watermelon');

console.log(fruits);
