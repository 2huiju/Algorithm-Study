// ** 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// ===정답
function solution(a, b) {
    let answer = 0;
    if(a>b){
        for(let i=0; i<=a-b; i++){
            answer += b+i;
        }
    } else if(b>a){
        for(let i=0; i<=b-a; i++){
            answer += a+i;
        }
    } else{
        answer = a;
    }
    return answer;
}

// 다른풀이
// 가우스정리 + Math.abs() 를 사용한 풀이.
function adder(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}