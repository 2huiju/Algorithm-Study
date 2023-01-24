// ** 문제 설명
// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 
// 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. 
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

//===정답
// 일단 보자마자 정규표현식을 통해서 문자를 숫자로 바꾸면 되겠다고 인식함
// 근데 이렇게 일일히 하는것 밖에 떠오르지 않음 (이게 되네 근데..)
function solution(s) {
    let test0 = s.replace(/zero/g, 0);
    let test1 = test0.replace(/one/g, 1); 
    let test2 = test1.replace(/two/g, 2); 
    let test3 = test2.replace(/three/g, 3); 
    let test4 = test3.replace(/four/g, 4); 
    let test5 = test4.replace(/five/g, 5); 
    let test6 = test5.replace(/six/g, 6); 
    let test7 = test6.replace(/seven/g, 7); 
    let test8 = test7.replace(/eight/g, 8); 
    let test9 = test8.replace(/nine/g, 9); 
    return Number(test9);
}

// ===다른풀이1.
// 내가 고민한걸 완벽하게 구현해낸 풀이라 생각이됨
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;
    
    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}