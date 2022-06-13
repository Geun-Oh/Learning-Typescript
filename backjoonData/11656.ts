const fs = require("fs");
const string = fs.readFileSync("./예제.txt").toString().trim();
const answer = [];

for(let i = 0; i < string.length; i++) {
    answer.push(string.substring(i, string.length));
}

const sort = (arr: string[]): string[] => {
    let inputArray = arr;
    for(let j = 0; j< inputArray.length - 1; j++) {
        for(let i = 0; i < inputArray.length - 1; i++) {
            if(inputArray[i] > inputArray[i + 1]) {
                let temp = inputArray[i + 1];
                inputArray[i + 1] = inputArray[i];
                inputArray[i] = temp;
            }
        }
    }
    return inputArray;
}

console.log(sort(answer).join("\n"));