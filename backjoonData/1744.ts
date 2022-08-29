/**
 * 아무리 생각해도 반례가 떠오르지 않는다... 인터넷 상에 있는 모든 반례를 다 시도했는데...
 * 0 퍼센트에서 바로 틀리는 걸 보면 뭔가 잘못하고 있는게 분명 있을 것이다.
 */
const fs = require("fs");
const finput: string[] = fs.readFileSync("./예제.txt").toString().split("\n");
const [n, ...input] = finput;
const arr = input.map(x => Number(x)).sort((a, b) => a - b);
let answer = 0;
const sol = (arr: number[]) => {
    if(arr.length === 1) {
        answer = arr[0];
        return;
    } 
    const plus = arr.filter(x => x > 0);
    const pluslen = plus.length;
    for(let i = 0; i < pluslen; i++) {
        if(plus[0] !== 1) break;
        plus.shift();
        answer++;
    }
    if(plus.length % 2 === 1) {
        const add = plus.shift();
        answer += add!;
    }
    for(let i = 0; i < Math.ceil(plus.length / 2); i++) {
        answer += plus[i * 2] * plus[i * 2 + 1];
    }
    const minus = arr.filter(x => x < 0);
    if(minus.length % 2 === 1) {
        const min = minus.pop();
        if(!arr.includes(0)) answer += min!;
    }
    for(let i = 0; i < Math.ceil(minus.length / 2); i++) {
        answer += minus[i * 2] * minus[i * 2 + 1];
    }
}
sol(arr);
console.log(answer);