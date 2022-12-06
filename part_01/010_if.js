// 010_조건문 배우기 - if

/** 조건문
 * 조건문이란 어떤 조건이 참인지 거짓인지에 따라 실행 여부를 결정하는 구문
 * 이를 활용하여 조건문에 따라 특정 코드를 실행하게 만들 수도, 실행하지 못하게 만들 수도 있음
 */

/** if 조건문
 * if(표현식) 명령문
 *
 * if 조건문은 표현식을 소괄호()로 둘러싼 형태를 가짐
 * 표현식에는 의사결졍을 할 수 있는 조건문을 작성하면 됨
 * 이 조건문의 결과값은 항상 불린형 값으로 반환되어야 하며,
 * if 조건문 결과값이 불린형 true인 경우에만 다음 명령문이 실행됨
 */

var result = true; // 변수 result에 불린값 true 대입

if (result) console.log('result가 참입니다'); // if(result)의 result가 true(참)이므로 다음의 명령문 실행
if (!result) console.log('실행되지 않습니다.'); // if(!result)는 인자값을 반대로 변경하여
// true 였던 result 변수 값을 false로 바꿔 반환함
// true가 아닌 if조건문은 다음의 명령문 실행X -> 출력 결과 없음
if (result) {
  console.log('result의 결과>>');
  console.log(`${result}입니다`);
}
// if(result) 다음의 명령문이 한 줄 이상인 경우 중괄호{}를 통해 블록을 잡을 수 있음
// 변수 result의 값이 true(참)이므로 다음 명령문 블록을 모두 실행하여 출력
