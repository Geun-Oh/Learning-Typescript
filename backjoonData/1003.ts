const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const[ n, ...nums ] = input;
const answer: string[] = [];

const dpchecker = (x: string) => {
    const num = Number(x);
    const zeroMemory: number[] = new Array(num + 1).fill(0);
    const oneMemory: number[] = new Array(num + 1).fill(0); 
    zeroMemory[0] = 1;
    oneMemory[1] = 1;
    
    for(let i = 2; i <= num; i++) {
        zeroMemory[i] = zeroMemory[i - 1] + zeroMemory[i - 2];
        oneMemory[i] = oneMemory[i - 1] + oneMemory[i - 2];
    }
    answer.push(`${zeroMemory[num]} ${oneMemory[num]}`);
}

for(let j = 0; j < n; j++) {
    dpchecker(nums[j]);
}

console.log(answer.join("\n"));