const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...nums] = input;
const numbers = nums.map(i => Number(i));

function solution(n, numbers) {
    const stack = [];
    let answer = "";
    let count = 1;

    for(let i = 0; i < n; i++) {
        const number = numbers.shift();
        while(count <= number) {
            stack.push(count++);
            answer += "+ ";
        }

        const popedItem = stack.pop();
        if (popedItem !== number) {
            return "NO";
        }
        answer += "- ";
    }

    return answer.split(" ").join("\n");
}

const answer = solution(n, numbers);
console.log(answer);