const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] = input;
let Arr = [...nums];

const sort = (arr: number[]) => {
    for(let j = 0; j< arr.length - 1; j++) {
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

Arr = sort(Arr.map(x => Number(x)));

for(let i = 1; i < Number(n); i++) {
    let newArr = [...Arr];
    newArr[1] += newArr[0];
    Arr = sort(newArr.slice(1, newArr.length));
}

console.log(Arr[0]);