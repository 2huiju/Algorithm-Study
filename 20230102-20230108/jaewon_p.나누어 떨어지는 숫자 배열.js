// ** 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

//==============
// 이번 풀이는 입출력 예를 하나씩 해결하는 과정이었음. 좋은 코드인진 모르겠다.
function solution(arr, divisor) {
    var answer = [];
    // 입출력 예#1 해결
    for(var i=0; i<arr.length; i++){
        if(arr[i]%divisor == 0){
            answer.push(arr[i]);
        }
    }

    // 입출력 예#2 해결
    answer.sort((a, b) => a - b);

    // 입출력 예#3 해결
    if(answer.length == 0){
        answer.push(-1);
        return answer;
    } 
    return answer;
}

// 다른 사람의 풀이 좋은거
// -> 네 코드랑 사실상 같은데 두 줄로 표현함. filter와 삼항연산자로 구현한 깔끔한 코드인듯
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}