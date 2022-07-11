const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim();
const answer: number[] = new Array(16).fill(0);
let Answer;

const sol = () => {
    if(Number(input) % 2 !== 0) return 0;
    if(Number(input) === 2) return 3;
    answer[0] = 1;
    answer[1] = 3;
    for(let i = 2; i < Number(input) / 2 + 1; i++) {
        answer[i] = answer[i - 1] * 3 + (answer.reduce((a, b) => a + b) - answer[i - 1]) * 2;
    }
    return answer[Number(input) / 2];
}
Answer = sol();

console.log(Answer);