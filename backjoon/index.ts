const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] =input;
const p = n.split(" ")[0];
const q = n.split(" ")[1];
const answer: number[] = new Array(Number(q) + 1).fill(0);
answer[0] = 1;
for(let i = 1; i < Number(q) + 1; i++) {
    for(let j = 0; j < Number(p); j++) {
        if(i - Number(nums[j]) < 0) continue;
        answer[i] += answer[i - Number(nums[j])];
        console.log(answer[i], i);
    }
}

console.log(answer);