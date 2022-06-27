"use strict";
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
console.log(answer);
