// **문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

function solution(participant, completion) {
    participant.sort();
    completion.sort();	
    for(let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]){
            return participant[i];
        }
    }
}
// -> sort로 배열 한번 정렬 후 안맞으면 바로 return

// 실패1. 
// -> 3번 입출력예 에서 participant에 이름이 중복되는걸 캐치하지 못함. (1,2번은 통과) 
// =====
// for(var i=0; i<participant.length; i++){
//     if(!completion.includes(participant[i])){
//         return participant[i]
//     }
// };


// 실패2.
// -> 이중for문을 돌리면서 completion배열에 인자가 participant의 인자와 같으면 빼고,
// 결과적으로 1개 남게될 participant의 인자를 return하는 방식으로 접근
// -> 그냥 시간초과. 일단 이게 맞는지도 모르겠네(안됨XXX)
// =====
// function solution(participant, completion) {   
//     for(var i=0; i<participant.length; i++){
//         for(var j=0; j<completion.length; j++){
//             if(participant[i] === completion[j]){
//                 completion.splice(j, 1);
//             }
//         }
//     };
//     return completion;
// }