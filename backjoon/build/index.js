"use strict";
const fs = require('fs');
const input = fs.readFileSync('./예제.txt').toString().split('\n');
const compareArray = Array.from({ length: input.length - 1 }, (v, i) => i + 1);
const reverseInput = []; // [1, 2, 5, 7, 8, 6, 3, 4]
const buffer = [];
const newAnswer = [];
for (let i = 1; i < input.length; i++) {
    reverseInput.unshift(parseInt(input[i]));
}
while (reverseInput.length > 1) {
    if (reverseInput[0] < reverseInput[1]) {
        buffer.push(reverseInput.shift());
        console.log(1, [reverseInput, buffer, newAnswer]);
    }
    else if (reverseInput[0] > reverseInput[1]) {
        buffer.push(reverseInput.shift());
        console.log(2, [reverseInput, buffer, newAnswer]);
        while (buffer[buffer.length - 1] > reverseInput[0]) {
            newAnswer.unshift(buffer.pop());
            console.log(3, [reverseInput, buffer, newAnswer]);
        }
    }
}
if (reverseInput.length === 1) {
    buffer.push(reverseInput.shift());
    console.log(4, [reverseInput, buffer, newAnswer]);
    console.log([...buffer, ...newAnswer]);
    console.log(compareArray);
    if ([...buffer, ...newAnswer] == [...compareArray]) {
        console.log("YES");
    }
    else {
        console.log("NO");
    }
}
