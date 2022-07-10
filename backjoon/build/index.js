"use strict";
const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [n, ...nums] = input;
const arr = [...nums];
const Arr = arr.map(x => Number(x));
let answer = Arr.filter((item, index) => index < 3);
answer = answer.filter(x => x !== Math.min(...answer));
// for(let i = 3; i < Number(n); i++) {
// }
console.log(answer);
