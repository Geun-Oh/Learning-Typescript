/**
 * 연속된 수들의 합 중 가장 큰 합을 찾는 문제이다.
 * 이전의 메모된 배열의 값에 자신을 더해보고 이를 자신과 비교하여 더 큰 쪽을 선택한다. 이를 반복하면 자동적으로 연속된 수들의 합이 구해지거나
 * 더 큰 수가 나와 갱신된다면 그 수를 시작으로하는 연속합이 구해질 것이다.
 */
const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
const [ n, nums ] = input;
const answer: number[] = [];
const array: string[] = nums.split(" ");
const targetArray = array.map(x => Number(x));
const memoArray: number[] = new Array(Number(n)).fill(0);
memoArray[0] = targetArray[0];

for(let i = 1; i < n; i++) {
    if(memoArray[i - 1] > 0) {
        memoArray[i] = memoArray[i - 1] + targetArray[i];
    } else if(memoArray[i - 1] <= 0) {
        memoArray[i] = targetArray[i];
    }
}

console.log(Math.max(...memoArray));