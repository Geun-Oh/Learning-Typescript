/**
 * 소괄호용 배열 대괄호용 배열을 따로 만든다.
 * 여는 괄호가 나오면 push
 * 닫는 괄호가 나오면 pop
 * 닫는 괄호가 나왔을 때 배열 길이가 0이면 no를 출력
 * 전부 다 돌았을 때 두 배열 길이가 0이면 yes를 출력
 */

 const fs = require("fs");
 const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
 const answer = [];
 
 const checker = (sentence: string) => {
     const splitSentence = sentence.split("");
     const inputCase = [];
     for(let i = 0; i < splitSentence.length; i++) {
         switch(splitSentence[i]) {
             case "(":
                 inputCase.push("(");
                 break;
             case ")":
                 if(inputCase[inputCase.length - 1] !== "(") return "no";
                 inputCase.pop();
                 break;
             case "[":
                 inputCase.push("[");
                 break;
             case "]":
                 if(inputCase[inputCase.length - 1] !== "[") return "no";
                 inputCase.pop();
                 break;
             default:
                 break;
         }
     }
     if(inputCase.length === 0) return "yes";
 }
 
 for(let j = 0; j < input.length - 1; j++) {
     answer.push(checker(input[j]));
 }
 
 console.log(answer.join("\n"));