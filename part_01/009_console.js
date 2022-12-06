// 009_콘솔로 자료형 출력하기
// 콘솔(Console)은 자바스크립트의 내장 객체
// console에는 여러 메소드들이 있음
// log 메소드는 console.log(메시지)와 같이 사용하여
// 괄호 안에 대입된 값을 일반적인 로그 메시지로 출력함

var str = 'JavaScript';
console.log('🚀 ~ str', str);
var num = 200;
console.log('🚀 ~ num', num);
var arr = [1, 2, 3, 4, 5];
console.log('🚀 ~ arr', arr);
var obj = { a: 1, b: 2, c: 3 };
console.log('🚀 ~ obj', obj);

// log 메소드 외 활용할 수 있는 다른 console 메소드

console.debug('log와 동일한 로그 메시지를 출력합니다.');
console.error('에러메시지를 출력합니다.');
console.info('정보성 메시지를 출력합니다');
console.warn('경고성 메시지를 출력합니다');
// debug(디버그-로그), error(에러), info(정보), warn(경고) 메서드를 사용할 수 있음
// 위 네가지 출력 메서드로 메시지 레벨을 설정하면
// 브라우저 웹 콘솔에서 원하는 레벨의 메시지들만 필터링 검색하여 출력 결과를 볼 수 있음
// 서버 로그를 파일로 저장할 수도 있는데, 이 때에도 console 메서드를 활용하여
// 원하는 레벨 이상의 로그만 출력하도록 설정할 수 있음
