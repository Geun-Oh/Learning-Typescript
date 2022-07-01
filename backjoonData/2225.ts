const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim();
const n = Number(input.split(" ")[0]);
const m = Number(input.split(" ")[1]);
const answer: number[][] = Array.from(Array(n + 1), () => Array(m).fill(0));
for(let i = 0; i < n + 1; i++) {
    answer[i][0] = 1;
}
for(let i = 0; i < m; i++) {
    answer[0][i] = 1;
}
for(let i = 1; i < m; i++) {
    for(let j = 1; j < n + 1; j++) {
        for(let k = 0; k < j + 1; k++) {
            answer[j][i] += answer[k][i - 1] % 1000000000;
        }
    }
}
console.log(answer[n][m - 1] % 1000000000);