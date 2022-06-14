/**
 * 문자열을 나눈 뒤 양 끝부터 비교를 시작한다.
 * 만일 양쪽이 다르다면 (왼쪽과 오른쪽에서 한칸 앞의 문자가 같은지) 확인하고 그렇다면 오른쪽 포인터를 이동하고 아닐 시
 * (오른쪽과 왼쪽에서 한칸 뒤의 문자가 같은지) 확인하고 그렇다면 왼쪽 포인터를 이동한다. 이 이후에도 같은 현상이 일어난다면 "아무것도 아니다"를 출력
 * if 문에서 만족하고 끝난다면 "유사 회문"을 출력
 * 문제없이 끝난다면 "회문"을 출력 
 * 
 * 예외 고려하는 것이 힘들었다. 각 예외별로 어떤 케이스인지 잘 파악해두도록 하자...
 * 다행히도 반복문을 많이 쓰지는 않아서 시간 초과라는 불상사는 일어나지 않았다.
 */

 const fs = require("fs");
 const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
 const answer = [];
 const [ n, ...strings ] = input;
 
 const palindromeChecker = (x: string) => {
     const splited = x.split("");
     let left = 0;
     let right = splited.length - 1
     let palinCount = 0;
     for(let i = 0; i < splited.length / 2; i++) {
         if(left >= right) {
             break;
         } else if(splited[left] === splited[right]) {
             left++;
             right--;
         } else if(left + 1 === right && splited[left] !== splited[right]) {
             palinCount++;
             break;
         } else if(splited[left + 1] === splited[right] && splited[left] === splited[right - 1]) {
             if(left + 4 >= right) return 1;
             left += 2;
             right -= 2;
         } else if(splited[left + 1] === splited[right]) {
             left++;
             palinCount++;
         } else if(splited[left] === splited[right - 1]) {
             right--;
             palinCount++;
         } else {
             return 2;
         }
     }
     return palinCount > 1 ? 2 : palinCount;
 }
 
 for(let j = 0; j < n; j++) {
     answer.push(palindromeChecker(strings[j]));
 }
 
 console.log(answer.join("\n"));