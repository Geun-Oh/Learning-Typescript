interface MyStack {
    size(): number;
    push(x: number): void;
    pop(): number;
    empty(): 0 | 1;
    top(): number;
    clear(): void;
}

type MyStackNode = {
    value: number;
    next?: MyStackNode;
}

class StackClass implements MyStack {
    private _size: number = 0;
    private head?: MyStackNode;

    size(): number {
        return this._size;
    }

    push(x: number): void {
        const node: MyStackNode = { value: x };
        if(!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this._size++;
    }

    pop(): number {
        if(!this.head) {
            return -1;
        } else {
            const value = this.head!.value;
            this.head = this.head.next;
            this._size--;
            return value;
        }
    }

    empty(): 0 | 1 {
        if(!this.head) return 1;
        return 0;
    }

    top(): number {
        if(!this.head) return -1;
        return this.head.value;
    }

    clear(): void {
        if(!this.head) return;
        this.head = undefined;
        this._size = 0;
    }
}

const leftStack = new StackClass();
const rightStack = new StackClass();

const fs = require('fs');
const input = fs.readFileSync('./예제.txt').toString().split('\n');
const answer: string[] = [];

for(let i = 1; i < input.length; i++) {
    const inputText: string = input[i].split("");
    console.log(inputText);
    while(leftStack.size() >= rightStack.size()) {
        for(let j = 0; j < inputText.length; j++) {
            switch(inputText[j]) {
                case "(":
                    leftStack.push(1);
                    break;
                case ")":
                    rightStack.push(1);
                    break;
            }    
        }
    }
    console.log(leftStack.size(), rightStack.size())
    if(leftStack.size() !== rightStack.size()) {
        answer.push("NO");
    }
    if(leftStack.size() === rightStack.size()) {
        answer.push("YES");
    }
    leftStack.clear();
    rightStack.clear();
}

console.log(answer.join("\n"));