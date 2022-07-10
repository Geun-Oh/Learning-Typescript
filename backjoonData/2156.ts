const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] = input;
const arr = [...nums];
const Arr = arr.map(x => Number(x));
let answer;
if(Arr.length === 1) {
    answer = Arr[0];
} else if(Arr.length === 2) {
    answer = Arr[1] + Arr[0];
} else if(Arr.length === 3) {
    answer = Arr[1] + Arr[0] + Arr[2] - Math.min(Arr[0], Arr[1], Arr[2]);
} else {
    const temp = [];
    temp[0] = Arr[0];
    temp[1] = Arr[0] + Arr[1];
    temp[2] = temp[1] + Arr[2] - Math.min(Arr[0], Arr[1], Arr[2]);
    
    for(let i = 3; i < Number(n); i++) {
        temp[i] = Math.max(temp[i - 2] + Arr[i], temp[i - 3] + Arr[i - 1] + Arr[i]);
        temp[i] = Math.max(temp[i - 1], temp[i]);
    }
    answer = temp[temp.length - 1];
}


console.log(answer);