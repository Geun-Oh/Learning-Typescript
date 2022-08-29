const fs = require("fs");
const finput: string[] = fs.readFileSync("./예제.txt").toString().split("\n");
const [n, ...input] = finput;
const sort = (arr: string[]) => {
    const targetArr = arr.sort((a, b) => a.localeCompare(b))
    for(let i = 0; i < targetArr.length - 1; i++) {
        if(targetArr[i] === targetArr[i + 1].slice(0, targetArr[i].length)) return "NO";
    }
    return "YES";
}
const answer = [];
let start = 1;
let len = Number(input[0]);
for(let i = 0; i < Number(n); i++) {
    const array = input.slice(start, start + len);
    answer.push(sort(array))
    let temp = len
    len = Number(input[start + len])
    start = start + temp + 1;
}
console.log(answer.join('\n'));