const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, ...nums ] = input;
const memoArray = new Array(Number(n)).fill(0);
memoArray[0] = Number(nums[0]);

for(let i = 1; i < n; i++) {
    const stringTargetArray: string[] = nums[i].split(" ");
    const targetArray = stringTargetArray.map(x => Number(x));
    const tempArray = [...memoArray];
    if(i !== 1) {
        for(let j = 1; j < i; j++) {
            if(tempArray[j - 1] > tempArray[j]) {
                memoArray[j] = targetArray[j] + tempArray[j - 1];
            } else if(tempArray[j - 1] <= tempArray[j]) {
                memoArray[j] = targetArray[j] + tempArray[j];
            }
        }
    }
    memoArray[i] = tempArray[i - 1] + targetArray[targetArray.length - 1];
    memoArray[0] += targetArray[0];
}

console.log(Math.max(...memoArray));