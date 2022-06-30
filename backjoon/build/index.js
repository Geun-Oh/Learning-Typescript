"use strict";
let start = new Date();
const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [n, ...nums] = input;
const p = n.split(" ")[0];
const q = n.split(" ")[1];
const answer = Array.from(Array(Number(p)), () => new Array(Number(q) + 1).fill(0));
for (let i = 1; i < Number(q) + 1; i++) {
    if (i >= Number(nums[0].split(" ")[0])) {
        answer[0][i] = Number(nums[0].split(" ")[1]);
    }
}
for (let i = 1; i < Number(q) + 1; i++) {
    for (let j = 1; j < Number(p); j++) {
        if (i >= Number(nums[j].split(" ")[0])) {
            answer[j][i] = answer[j - 1][i] > answer[j - 1][i - Number(nums[j].split(" ")[0])] + Number(nums[j].split(" ")[1]) ? answer[j - 1][i] : answer[j - 1][i - Number(nums[j].split(" ")[0])] + Number(nums[j].split(" ")[1]);
        }
        else if (i < Number(nums[j].split(" ")[0])) {
            answer[j][i] = answer[j - 1][i];
        }
    }
}
console.log(answer[Number(p) - 1][Number(q)]);
let end = new Date();
console.log(Number(end) - Number(start));
