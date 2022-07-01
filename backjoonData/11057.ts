const fs = require("fs");
const input = Number(fs.readFileSync("./예제.txt").toString().trim().split("\n"));
let answer: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for(let i = 0; i < input - 1; i++) {
    const temp = [...answer];
    answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let j = 0; j < 10; j++) {
        for(let k = 0; k < j + 1; k++) {
            answer[j] += temp[j - k] % 10007;
        }
    }
}

console.log(answer.reduce((a, b) => a + b) % 10007);