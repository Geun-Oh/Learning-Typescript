const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] =input;
const p = n.split(" ")[0];
const q = n.split(" ")[1];
const answer: number[][] = Array.from(Array(Number(p)), () => new Array(Number(q) + 1).fill(0));
for(let i = 1; i < Number(q) + 1; i++) {
    if(i >= Number(nums[0].split(" ")[0])) {
        answer[0][i] = Number(nums[0].split(" ")[1])
    }
}
for(let i = 1; i < Number(q); i++) {
    for(let j = 1; j < Number(p) + 1; j++) {
        if(i >= Number(nums[]))
    }
}
console.log(answer);