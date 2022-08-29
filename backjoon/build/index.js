"use strict";
const fs = require("fs");
const finput = fs.readFileSync("./예제.txt").toString().split("\n");
const [num, ...input] = finput;
const [node, line, start] = num.split(' ');
console.log(input, node, line, start);
const newLine = new Array(Number(line)).fill([]);
for (let i = 0; i < Number(line); i++) {
    newLine[i] = input[i].split(" ").map(Number);
}
console.log(newLine);
const order = [];
const DFS = (start) => {
    order.push(start);
    for (let i = 1; i < Number(node); i++) {
        if (newLine.includes([start, start + i])) {
            if (order.includes(start + i))
                continue;
            DFS(start + i);
            order.push(start + i);
        }
    }
};
DFS(1);
console.log(order);
