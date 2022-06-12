const fs = require("fs");
const input = fs.readFileSync('./예제.txt').toString().trim().split('\n');
const [n, ...words] = input;

/**
 * 문자열을 split 하여 for문을 돌린다.
 * 만일 알파벳과 다음 알파벳이 같은 경우 continue;
 * 만일 알파벳과 다음 알파벳이 다른 경우 새로운 for문을 돌리는데
 * 알파벳의 종류를 수집하는 배열을 만들어두고 이 곳에 알파벳이 있는지 확인한다.
 * 없으면 추가하고 있으면 그룹 단어가 아닌 것이다.
 */

let answer = 0;

const groupTypeChecker = (word: string) => {
    const type = []; // 알파벳 종류를 저장하는 배열
    const alphabets = word.split("");
    type.push(alphabets[0]);
    for(let i = 1; i < alphabets.length; i++) {
        if(alphabets[i] !== alphabets[i - 1]) {
            if(type.includes(alphabets[i])) return;
            type.push(alphabets[i]);
        }
        continue;
    }
    answer++;
}

for(let j = 0; j < words.length; j++) {
    groupTypeChecker(words[j]);
}

console.log(answer);