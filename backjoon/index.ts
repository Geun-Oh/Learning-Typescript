const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("");
const temp = [1, 0];
let answer = 0;

for(let i = 1; i < input.length; i++) {
    const not = [...temp];
    if(Number(input[i]) === 0) {
        temp[1] = not[0] % 1000000;
        temp[0] = 0;
    } else if(Number(input[i - 1]) === 1 || Number(input[i - 1]) === 2) {
        temp[1] = not[0] % 1000000;
        temp[0] += not[1] % 1000000;
    } else if(Number(input[i - 1]) === 0) {
        temp[0] = not[1] % 1000000;
        temp[1] = 0;
    } else {
        temp[0] += not[1] % 1000000;
        temp[1] = 0;
    }
}

Number(input[0]) === 0 ? answer = 0 : answer = (temp[0] + temp[1]) % 1000000;

console.log(answer);
/**
 * 2 => 2
25 => 2 5 / 25 기존 + 1
251 => 2 5 1 / 25 1 
2511 => 2 5 1 1 / 25 1 1 / 25 11 / 2 5 11 => 마지막 두 자리가 26보다 작기 때문에
25114 => 2 5 1 1 4 / 25 1 1 4

마지막을 띄고 계산한 경우 a, 마지막을 붙이고 계산한 경우 b

십의 자리가 1 또는 2라면 b를 a에 합치고 기존 a 를 b로 한다.
그렇지 않다면 b를 a에 합치고 b를 초기화한다.
0인 경우는 a를 b에 넣고 a를 초기화한다.

1 0
1 1
2 0
2 2
4 2
1111111111 1이 10개

121074110

1 0
1 1
2 1
0 2
2 0
2 0
2 0
2 2
0 2

30

1 0
1 0
27을 넘는 경우를 생각하지 못했다.
케이스를 다시 나누자.
 */