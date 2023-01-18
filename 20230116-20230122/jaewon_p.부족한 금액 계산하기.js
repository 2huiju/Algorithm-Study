// ** 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데,
// 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// === 정답.
// 처음에 4번케이스를 통과하지 못했었는데 "금액이 부족하지 않으면 0을 return 하세요." 이 부분을 충족하지 못했었음
// if문을 추가하여 0을 return하는 경우를 만들어줌
function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i++){
        answer += price * i
    }
    if(answer > money){
        return answer - money;
    } else {
        return 0;   
    }
}


// 다른풀이
// 가우스 공식을 사용한 깔끔한 풀이라고함.. 까리하다.
// 1 ~ x까지의 합 n * (n + 1) / 2인데 여기에 price배 만큼 곱해주는 거니까 (앞의 식) * price 
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
