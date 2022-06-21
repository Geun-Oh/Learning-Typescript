const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim();
let answer = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for(let i = 0; i < Number(input) - 1; i++) {
    const temp = [...answer];
    answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for(let j = 0; j < 10; j++) {
        if(j === 0) {
            answer[1] += temp[j] % 1000000000;
        } else if(j === 9) {
            answer[8] += temp[j] % 1000000000;
        } else {
            answer[j + 1] += temp[j] % 1000000000;
            answer[j - 1] += temp[j] % 1000000000;
        }
    }
}

const sum = answer.reduce((acc, curr) => {
    return (acc + curr) % 1000000000;
  }, 0);
console.log(sum);