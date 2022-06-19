"use strict";
const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [n, nums] = input;
const answer = [];
const array = nums.split(" ");
const targetArray = array.map(x => Number(x));
const countArray = new Array(Number(n)).fill(0);
countArray[0] = 1;
let count = 0;
for (let i = 1; i < n; i++) {
    if (targetArray[i] > targetArray[i - 1]) {
        if (targetArray[i] > targetArray[count]) {
            countArray[i] = Math.max(...countArray) + 1;
            count = i;
        }
    }
    else if (targetArray[i] < targetArray[i - 1]) {
        countArray[i] = Math.max(...countArray);
    }
}
console.log(countArray);
