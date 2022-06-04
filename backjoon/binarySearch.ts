const proxyInput = [4, 1, 5, 2, 3];
const proxyNumber = [1, 3, 7, 9, 5];
const binarySerachAnswer: string[] = [];

// 정렬 함수
const sort = (arr: number[]): number[] => {
    let inputArray = arr;
    for(let j = 0; j< inputArray.length - 1; j++) {
        for(let i = 0; i < inputArray.length - 1; i++) {
            if(inputArray[i] > inputArray[i + 1]) {
                let temp = inputArray[i + 1];
                inputArray[i + 1] = inputArray[i];
                inputArray[i] = temp;
            }
        }
    }
    return inputArray;
}

const binarySearch = (nArray: number[], mArray: number[]) => {
    const find = (m: number) => {
        let pointer = nArray.length / 2
        let leftCursor = 0
        let rightCursor = nArray.length - 1

        while(m !== nArray[pointer]) {
            if(m < nArray[pointer]) {
                rightCursor = pointer - 1;
                pointer = (leftCursor + rightCursor) / 2;
            } else if(m > nArray[pointer]) {
                leftCursor = pointer + 1;
            }
        }
        return pointer;
    }

    for(let i = 0; i < mArray.length; i++) {
        find(mArray[i]);
    }
}

console.log(sort(proxyInput));