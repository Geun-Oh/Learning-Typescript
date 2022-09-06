const fs = require("fs");
const finput = fs.readFileSync("./예제.txt").toString().split("\n");
const [ n, ...input ] = finput;
const answer = [];
type Store = {
  [key: number]: number;
}
const store: Store = {};
const temp = input[0].split(' ');
const Aarr = temp.map(Number).sort((a: number, b: number) => a - b);
const Barr: number[] = new Array(n).fill(0);
for(let i = 1; i < Number(n); i++) {
  if(Aarr[i] > Aarr[i - 1]) {
    Barr[i] = Barr[i - 1] + 1;
  } else if(Aarr[i] === Aarr[i - 1]) {
    Barr[i] = Barr[i - 1];
  }
}

for(let i = 0; i < Aarr.length; i++) {
  store[Aarr[i]] = Barr[i];
}
for(let i = 0; i < Aarr.length; i++) {
  answer[i] = store[temp[i]];
}

console.log(answer.join(" "));