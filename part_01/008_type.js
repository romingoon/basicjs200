// 008_자료형 이해하기
// 자바스크립트는 크게 두가지 타입으로 구분
// 원시 타입(Primitive Data Type) / 참조 타입(Reference Data Type)

/** 원시 타입(Primitive Data Type)
 * 값이 변수에 할당될 때 메모리 상에 고정된 크기로 저장됨
 * 해당 변수가 직접 값을 보관함
 * 고정된 공간에 보관된 원시 타입의 값은 변경 불가능한 값, 불변값(Immutable Value)인 특징을 가짐
 * 윈시 데이터 타입 : 숫자형(Number), 문자형(String), 불린형(Boolean), 심볼형(Symbol), null, undefined
 */

var x = 5; // 숫자형(Number) : 숫자를 표현하는 자료형,
// 자바스크립트의 숫자 자료형은 정수, 실수 등 여러 종류로 구분하지 않고 하나로 포괄
console.log('🚀 ~ x', x, typeof x);

var y = 'five'; // 문자형(String) : '' 또는 " "를 양 끝에 두고
// 그 안에 한글자 이상의 문자, 기호 또는 숫자가 있는 자료형
console.log('🚀 ~ y', y, typeof y);

var isTrue = true; // 불린형(Boolean) : 참(true)/거짓(false) 두 가지 값을 가짐
console.log('🚀 ~ isTrue', isTrue, typeof isTrue);

var empty = null; // null : 빈 값을 의미
console.log('🚀 ~ empty', empty, typeof empty);

var nothing; //undefined : 존재하지 않는 값을 의미
console.log('🚀 ~ nothing', nothing, typeof empty);

var sym = Symbol('me'); // Symbol : ES6에서 추가된 윈시자료형,
// 다른 원시형과는 다르게 유일하게 변경 불가능한 자료형,
// 참조형의 키(Key)로도 사용 가능함.
console.log('🚀 ~ sym', sym, typeof sym);

/** 참조 타입
 * 원시 타입과 달리 변수에 고정된 크기를 저장하지 않음.
 * 값의 메모리 주소를 참조
 * 객체는 속성들(Properties)의 집합
 * 집합 내부에는 순서도 크기도 고정되어 있지 않음
 * 고정되지 않은 값을 변수에 할당하려면 직접 해당 값을 저장할 수 없으나, 참조하는 것은 가능
 * 참조 타입은 값의 메모리 주소를 변수에 할당하여 값을 참조
 *
 * 메모리 주소를 통해 값을 참조한다는 의미는 "주소"라는 의미 그대로 이해하면 됨
 * 변수의 값을 불러오려면 저장되어있는 메모리 주소를 찾아가서 값을 가져옴
 */

// 객체(Object) : {} 안에 키(Key) : 값(Value) 형태로 이루어진 속성들의 모음
// 키는 반드시 문자(String) 자료형이여야 하고, 이 속성 키를 통해 해당 속성에 매핑된 값에 접근할 수 있음

/** 자바스크립트에는 특성에 따라 여러 형태의 객체들이 있음
 * Global Object 객체는 모든 객체의 부모가 되는 객체.
 * 이를 부모삼아 함수(Function), 배열(Array), 원시 자료형을 객체로 감싼
 * 새로운 형태의 객체(String, Number,Boolean)와
 * 특수 연산에 특화된 내장 객체(Math, JSON, RegEx),
 * Iterable과 Collection 특성의 객체 (Map, Set, WeakMap, WeakSet) 등의 표준 내장 객체가 있음
 */

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
