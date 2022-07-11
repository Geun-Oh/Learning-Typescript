const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("");
const temp = [1, 0];
let answer = 0;

for(let i = 1; i < input.length; i++) {
    const not = [...temp];
    if(Number(input[i]) === 0) {
        if(Number(input[i - 1]) > 2) {
            temp[1] = 0;
            temp[0] = 0;
        } else {
            temp[1] = not[0];
            temp[0] = 0;
        }
    } else if(Number(input[i - 1]) === 0) {
        temp[0] = not[1];
        temp[1] = 0;
    } else if(Number(input[i - 1]) === 1 || Number(input[i - 1]) === 2) {
        if(Number(input[i]) > 6) {
            temp[0] += not[1] % 1000000;
            temp[1] = 0;
        } else {
            temp[1] = not[0];
            temp[0] += not[1] % 1000000;
        }
    } else {
        temp[0] += not[1] % 1000000;
        temp[1] = 0;
    }
}

Number(input[0]) === 0 ? answer = 0 : answer = (temp[0] + temp[1]) % 1000000;

console.log(answer);