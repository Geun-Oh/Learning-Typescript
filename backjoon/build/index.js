"use strict";
const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const n = Number(input[0]);
const m = Number(input[1]);
const answer = Array.from(Array(n + 2), () => Array(m + 2).fill(0));
for (let i = 0; i < n + 1; i++) {
    answer[i][0] = 1;
    answer[i][1] = i;
}
answer[4][2] = 2;
answer[5][2] = 5;
for (let i = 4; i < n + 1; i++) {
    for (let j = 2; j < m + 1; j++) {
        if (i / j < 2) {
            continue;
        }
        else if (i / j === 2) {
            answer[i][j] = 2;
        }
        else {
            answer[i][j] = (answer[i - 1][j] + answer[i - 3][j - 1] + answer[i - 5][j - 2]) % 1000000003;
        }
    }
}
console.log(answer[n][m] % 1000000003);
