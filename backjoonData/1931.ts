/**
 * 문제를 풀지는 못했다. 그리디 알고리즘에 대해 좀 더 알아본 뒤에 돌아올 것!
 */
const fs = require("fs");
const finput: string[] = fs.readFileSync("./예제.txt").toString().split("\n");
const [ n, ...input ] = finput;
const targetArr: any = new Array(Number(n)).fill(0);
const indexArr: number[] = new Array(Number(n)).fill(0);
indexArr[indexArr.length - 1] = 1;
for(let i = 0; i < input.length; i++) {
    const item = input[i].split(' ');
    targetArr[i] = item;
}
for(let i = targetArr.length - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        if(Number(targetArr[j][0]) > Number(targetArr[j + 1][0])) {
            let temp = targetArr[j]
            targetArr[j] = targetArr[j + 1]
            targetArr[j + 1] = temp
            // [targetArr[j], targetArr[j + 1]] = [targetArr[j + 1], targetArr[j]]
        }
    }
}

for(let i = targetArr.length - 2; i >= 0; i--) {
    for(let j = i; j < targetArr.length; j++) {
        if(Number(targetArr[i][1]) > Number(targetArr[targetArr.length - 1][0])) {
            indexArr[i] = 1;
            break;
        }
        if(Number(targetArr[i][1]) <= Number(targetArr[j][0])) {
            indexArr[i] = indexArr[j] + 1;
            break;
        }
    }
}