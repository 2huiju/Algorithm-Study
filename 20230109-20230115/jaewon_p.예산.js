// ** 문제 설명
// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 
// 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 
// 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// =====
// 정답.
// 도저히 왜 틀렸는지 모르다가, 문제 하단에 '질문하기'에 있는 답변을 통해 해답을 찾음
// 단순히 sort()를 할 경우 실패한 테스트케이스 중, [1, 2, 10, 30]가 [1, 10, 2, 30]로 되는 케이스가 발생.
// 따라서 var sort = d.sort((a, b) => a - b); 이렇게 변경해줌.
function solution(d, budget) {
    var sort = d.sort((a, b) => a - b);
    var sum = 0;
    var result = 0;

    for (var i = 0; sum <= budget; i++) {
        if (sum + sort[i] <= budget) {
            sum += sort[i];
            result++;
            continue;
        }
        else {
            break;
        }
    }
    return result;
}

// 실패1.
// 처음 접근방식 - 배열을 sort하고 하나씩 더하면서 빈배열에 push. 이후 budget보다 크면 stop하기
// result가 budget보다 작을때 더해지는 로직때문에 budget을 초과하는 경우가 발생해서 실패
// =====
// function solution(d, budget) {
//     var sort = d.sort();
//     var sum = 0;
//     var resultArr = [];
//     for(var i=0; i<sort.length; i++){
//         sum += sort[i];
//         resultArr.push(sort[i]);
//         if(sum >= budget) {
//             return resultArr.length;
//         }
//     }
// }

// 실패2.
// for문안에서 sum값을 budget과 비교하면서 접근하고, 배열의 length말고 숫자에 ++를해서 나타내도록 접근.
// 이렇게 접근하다보니 continue와 break를 자연스럽게 사용하게됨.
// 근데 코드 실행에선 성공했으나, 제출할때 다른 테스트케이스에서 실패함.
// =====
// function solution(d, budget) {
//     var sort = d.sort();
//     var sum = 0;
//     var result = 0;

//     for (var i = 0; sum <= budget; i++) {
//         if (sum + sort[i] <= budget) {
//             sum += sort[i];
//             result++;
//             continue;
//         }
//         else {
//             break;
//         }
//     }
//     return result;
// }