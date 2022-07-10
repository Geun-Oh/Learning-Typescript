const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] = input;
const arr = [...nums];
const Arr = arr.map(x => Number(x));
let answer: number[] = Arr.filter((item, index) => index < 3);
answer = answer.filter(x => x !== Math.min(...answer));

for(let i = 3; i < Number(n); i++) {
    if(answer[answer.length - 1] === Arr[i - 1] && answer[answer.length - 2] === Arr[i - 2]) {

    }
}

console.log(answer);

/**
 * 2 5 8 4 3 5 7 2 1 8

만일 맨 뒤의 두 수가 선택된 경우라면
그대로 유지를 하거나
해당 수를 선택할 수 있다.
해당 수를 선택할 때
2 인덱스 앞의 수를 택한다면
1 인덱스 앞의 수를 택하거나

5 8 3 7 이 최고였는데 여기에 2가 추가되는 것
 */