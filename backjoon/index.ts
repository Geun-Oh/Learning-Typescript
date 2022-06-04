const fs = require("fs");
const input: string[] = fs.readFileSync('./예제.txt').toString().split('\n');
const number = parseInt(input[0]);
let answer = 0;

const setCompare = (word: string): boolean => {
    let wordSplit = word.split(""); // ["h", "a", "p", "p", "y"]
    let wordSet = new Set(wordSplit); // ["h", "a", "p", "y"]
    
    if(wordSet.size === wordSplit.length) {
        return true;
    } else {
        return false;
    }
}

for(let i = 1; i < number; i++) {
    if(setCompare(input[i]) === true) {
        answer++;
    }
}

console.log(answer);