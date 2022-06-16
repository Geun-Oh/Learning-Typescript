/**
 * 숫자가 15보다 큰 경우 15로 나눈 나머지가 3의 배수인지 확인한다.
 * 숫자가 15보다 작은 경우 5로 나눈 나머지가 3의 배수인지 확인한다.
 * 둘 다 아닌 경우 그냥 3의 배수인지 확인한다.
 */

 const fs = require("fs");
 let input = fs.readFileSync("./예제.txt").toString().trim();
 
 let threeCount = 0;
 
 while(true) {
     if(input % 5 === 0) {
         console.log(Math.floor(input / 5) + threeCount);
         break;
     }
     if(input < 0) {
         console.log(-1);
         break;
     }
     input -= 3;
     threeCount++;
 }