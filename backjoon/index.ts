const fs = require("fs");
const input = fs.readFileSync('./예제.txt').toString().split('\n');
let bubbleSortArr = input[1].split(" ");
bubbleSortArr = bubbleSortArr.map((x: string) => parseInt(x));
let swap = 0;

const bubbleSort = (arr: number[]): number[] => {
    let inputArray = arr;
    for(let j = 0; j< inputArray.length - 1; j++) {
        for(let i = 0; i < inputArray.length - 1; i++) {
            if(inputArray[i] > inputArray[i + 1]) {
                let temp = inputArray[i + 1];
                inputArray[i + 1] = inputArray[i];
                inputArray[i] = temp;
                swap++;
            }
        }
    }
    return inputArray;
}
bubbleSort(bubbleSortArr);
console.log(swap);