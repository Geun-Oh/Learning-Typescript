const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] =input;
const p = Number(n.split(" ")[0]);
const q = Number(n.split(" ")[1]);
const answer: number[][] = Array.from(Array(p), () => new Array(q + 1).fill(0));
for(let i = 1; i < q + 1; i++) {
    if(i >= Number(nums[0].split(" ")[0])) {
        answer[0][i] = Number(nums[0].split(" ")[1]);
    }
}
for(let i = 1; i < q + 1; i++) {
    for(let j = 1; j < p; j++) {
        if(i >= Number(nums[j].split(" ")[0])) {
            answer[j][i] = answer[j - 1][i] > answer[j - 1][i - Number(nums[j].split(" ")[0])] + Number(nums[j].split(" ")[1]) ? answer[j - 1][i] : answer[j - 1][i - Number(nums[j].split(" ")[0])] + Number(nums[j].split(" ")[1]);
        }
        else if(i < Number(nums[j].split(" ")[0])) {
            answer[j][i] = answer[j - 1][i];
        }
    }
}
console.log(answer[p - 1][q]);