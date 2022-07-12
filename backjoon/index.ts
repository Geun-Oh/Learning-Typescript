const fs = require("fs");
const input: string[] = fs.readFileSync("./예제.txt").toString().trim().split(" ");
const arr = input.map(x => Number(x));
let lf = 0;
let rf = 0;

const sol = () => {
    let answer = [];
    if(arr[arr.length - 1] !== 0) return 0;
    if(arr.length === 1) return 0;
    if(arr[0] === arr[1]) {
        answer[0] = 2;
        answer[1] = 3;
        lf = arr[0];
    } else {
        answer[0] = 2;
        answer[1] = 4;
        lf = arr[0];
        rf = arr[1];
    }
    if(arr.length === 2) {
        return answer[0];
    } else if(arr.length === 3) {
        return answer[1];
    } else if(arr.length > 3) {
        for(let i = 2; i < arr.length - 1; i++) {
            if(arr[i] === lf || arr[i] === rf) {
                answer[i] = answer[i - 1] + 1;
            } else if(Math.abs(arr[i] - lf) === 2) {
                answer[i] = answer[i - 1] + 3;
                rf = arr[i];
            } else if(Math.abs(arr[i] - rf) === 2) {
                answer[i] = answer[i - 1] + 3;
                lf = arr[i];
            } else if(Math.abs(lf - rf) === 2) {
                answer[i] = answer[i - 1] + 3;
                if(arr[i + 1] === lf) {
                    rf = arr[i];
                } else if(arr[i + 1] === rf) {
                    lf = arr[i];
                } else {
                    lf = arr[i];
                }
            }
        }
        return answer[answer.length - 1];
    }
}

console.log(sol());