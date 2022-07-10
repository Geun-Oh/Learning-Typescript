"use strict";
const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split(" ");
const n = Number(input[0]);
let m = Number(input[1]);
let count = 1;
while (n < m) {
    if (m % 10 === 1) {
        m = Math.floor(m / 10);
    }
    else if (m % 2 === 0) {
        m = m / 2;
    }
    else {
        count = -1;
        break;
    }
    count++;
}
if (n !== m) {
    count = -1;
}
console.log(m, count);
