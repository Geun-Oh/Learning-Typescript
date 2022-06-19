const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] = input;
const answer: number[] =[];

const dp = (x: number) => {
    const dpArray: number[] = new Array(x + 1).fill(0);
    dpArray[0] = 0;
    dpArray[1] = 1;
    dpArray[2] = 2;
    dpArray[3] = 4;
    for(let i = 4; i <= x; i++) {
        dpArray[i] = dpArray[i - 1] + dpArray[i - 2] + dpArray[i - 3];
    }
    return dpArray[x];
}

for(let j = 0; j < n; j++) {
    answer.push(dp(Number(nums[j])));
}

console.log(answer.join("\n"));