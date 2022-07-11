"use strict";
const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim();
const answer = new Array(16).fill(0);
let Answer;
const sol = () => {
    if (Number(input) % 2 !== 0)
        return 0;
    if (Number(input) === 2)
        return 3;
    answer[0] = 1;
    answer[1] = 3;
    for (let i = 2; i < Number(input) / 2 + 1; i++) {
        answer[i] = answer[i - 1] * 3 + (answer.reduce((a, b) => a + b) - answer[i - 1]) * 2;
    }
    return answer[Number(input) / 2];
};
Answer = sol();
console.log(Answer);
/**
 * let ans2 = [1, 1, 0]; // 가짓수, 2의 개수, 4의 개수
let ans4 = [2, 2, 1];
let answer = 0;

const sol = () => {
    if(Number(input) % 2 !== 0) {
        return 0;
    }
    if(Number(input) === 2) {
        return ans2[1] * 3 + ans2[2] * 2;
    }
    if(Number(input) === 4) {
        return ans4[1] * 3 + ans4[2] * 2;
    }
    for(let i = 2; i < Number(input) / 2; i++) {
        const temp2 = [...ans2];
        const temp4 = [...ans4];
        const temp6 = [0, 0, 0];
        temp6[1] = temp2[1] + temp4[1] + temp4[0];
        temp6[2] = temp2[2] + temp4[2] + temp2[0];
        temp6[0] = temp2[0] + temp4[0];
        ans2 = [...temp4];
        ans4 = [...temp6];
    }
    return ans4[1] * 3 + ans4[2] * 2;
}
 */ 
