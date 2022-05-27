const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().split("\n");

let count: number = parseInt(input[0]);
let number: string[] = input[1].split(" ");
let answer = 0;

for(let i = 0; i < number.length; i++){
    let targetNumber = parseInt(number[i]);
    if(targetNumber === 2 || targetNumber === 3){
        answer++;
        continue;
    }
    for(let j = 2; j < Math.sqrt(targetNumber); j++){
        if(targetNumber % j === 0){
            break;
        }
        answer++;
    }
}

console.log(answer);