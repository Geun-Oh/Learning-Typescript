"use strict";
const fs = require('fs');
const input = fs.readFileSync('./예제.txt').toString().split('\n');
const compareArray = Array.from({ length: input.length - 1 }, (v, i) => i + 1);
const reverseInput = []; // [1, 2, 5, 7, 8, 6, 3, 4]
const buffer = [];
const newAnswer = [];
const answerList = [];
let final;
for (let i = 1; i < input.length; i++) {
    reverseInput.unshift(parseInt(input[i]));
}
for (let i = 0; i < reverseInput.length - 1; i++) {
    if (reverseInput[i] < reverseInput[i + 1]) {
        buffer.push(reverseInput[i]);
        answerList.unshift("-");
        console.log(1, i, reverseInput, buffer, newAnswer);
    }
    else if (reverseInput[i] > reverseInput[i + 1]) {
        buffer.push(reverseInput[i]);
        answerList.unshift("-");
        console.log(2, i, reverseInput, buffer, newAnswer);
        let j = i;
        while (buffer[buffer.length - 1] > reverseInput[i + 1]) {
            newAnswer.unshift(buffer.pop());
            answerList.unshift("+");
            console.log(3, i, reverseInput, buffer, newAnswer);
            j--;
        }
    }
}
buffer.push(reverseInput[reverseInput.length - 1]);
answerList.unshift("-");
for (let i = 0; i < buffer.length; i++) {
    answerList.unshift("+");
    console.log(4, reverseInput, buffer, newAnswer);
}
if (JSON.stringify([...buffer, ...newAnswer]) === JSON.stringify(compareArray)) {
    final = answerList.join("\n");
}
else {
    final = "NO";
}
console.log(reverseInput, buffer, newAnswer);
console.log(final);
