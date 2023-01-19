// ** 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 
// 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 입출력 예
// phone_number	    return
// "01033334444"	"*******4444"
// "027778888"      "*****8888"

// ===정답
// 직관적으로 접근함
// 1. 뒤에 4자리 짜르기
// 2. 뒤에 4자리르 제외한 앞의 자리 짜르기
// 3. 2번 값을 전부 *로 바꾸기
// 4. 1,3번 붙이기
function solution(phone_number) {
    let slice = phone_number.slice(-4)
    let forward = phone_number.substr(0, phone_number.length-4) 
    let replace = forward.replace(/[0-9]/gi, "*");
    return replace + slice;
}

// 다른사람 풀이
// 정규식 풀이..?
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}
// 이거 좋다
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
}