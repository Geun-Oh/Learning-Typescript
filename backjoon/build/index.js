"use strict";
// const fs = require('fs');
// const input = fs.readFileSync('./예제.txt').toString().split('\n');
// const answer: string[] = [];
const proxyInput = [4, 1, 5, 2, 3];
const proxyNumber = [1, 3, 7, 9, 5];
const sort = (arr) => {
    let inputArray = arr;
    for (let j = 0; j < inputArray.length - 1; j++) {
        for (let i = 0; i < inputArray.length - 1; i++) {
            if (inputArray[i] > inputArray[i + 1]) {
                let temp = inputArray[i + 1];
                inputArray[i + 1] = inputArray[i];
                inputArray[i] = temp;
            }
        }
    }
    return inputArray;
};
console.log(sort(proxyInput));
// console.log(answer.join("\n"));
