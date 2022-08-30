"use strict";
const fs = require("fs");
const finput = fs.readFileSync("./예제.txt").toString().split("\n");
const [num, ...input] = finput;
const [node, line, start] = num.split(' ');
const newLine = new Array(Number(line)).fill([]);
for (let i = 0; i < Number(line); i++) {
    newLine[i] = input[i].split(" ").map(Number);
}
let lines = {};
for (let i = 0; i < Number(node); i++) {
    let tempArr = [];
    for (let j = 0; j < newLine.length; j++) {
        if (newLine[j][0] === i + 1) {
            tempArr.push(newLine[j][1].toString());
        }
        else if (newLine[j][1] === i + 1) {
            tempArr.push(newLine[j][0].toString());
        }
    }
    tempArr.sort((a, b) => a.localeCompare(b));
    lines[i + 1] = tempArr;
}
const BFS = (graph, startNode) => {
    const visited = [];
    let needVisit = [];
    needVisit.push(startNode);
    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
};
const DFS = (graph, startNode) => {
    const visited = [];
    let needVisit = [];
    needVisit.push(startNode);
    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited;
};
console.log(`${DFS(lines, start).join(' ')}\n${BFS(lines, start).join(' ')}`);
