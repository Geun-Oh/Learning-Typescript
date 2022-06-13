const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] = input;
const answer = [];

const checker = (line: string) => {
    const inputLine = line.split(" ").map(x => Number(x));
    const [ m, ...scores ] = inputLine;
    const average = scores.reduce((a, b) => a + b, 0) / m;
    let overAverageCount = 0;
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > average) overAverageCount++;
    }
    return (overAverageCount / m * 100).toFixed(3);
}

for(let j = 0; j < n; j++) {
    answer.push(checker(nums[j]) + "%");
}

console.log(answer.join("\n"));