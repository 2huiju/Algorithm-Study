// ** 문제 설명
// 과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, 
// k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

// 한 상자에 사과를 m개씩 담아 포장합니다.
// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
// 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

// 예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 
// 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

// (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 
// 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

// ===정답
// 아래 실패코드에서 일일히 나눈 작업을 for문안 조건에서 한번에 구현
// 짜는데 엄청 오래걸렸음.. 접근이 잘 안됐음
// *** 피드백 : for문안 조건을 짤때 i=0, i++의 틀에 너무 갇혀있었음 ***
// (풀고보니 제인이랑 문제가 겹침)
function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b-a)
    for(let i = m-1; i < score.length; i += m){
        answer += score[i] * m;
    }
    return answer;
}


// === 실패코드 : 런타임에러
// 상자배열을 일일히 만들고, 그 배열의 마지막 인덱스값을 곱해서 answer에 +=해주기
// 입출력예는 통과했으나 다른 테스트케이스에서 런타임에러
// 과정을 너무 풀어서 그런듯함
function solution(k, m, score) {
    let answer = 0;
    let arr = score.sort((a,b) => b-a);
    let box = Math.floor(arr.length/m);
    
    for(let i=0; i<box; i++){
        let boxA = arr.slice((m*i), (m*(i+1))-1)
        let min = boxA[boxA.length-1]
        answer += min * m
    }
    return answer;
}