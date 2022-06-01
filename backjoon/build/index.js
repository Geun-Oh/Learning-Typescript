"use strict";
class StackClass {
    constructor() {
        this._size = 0;
    }
    size() {
        return this._size;
    }
    push(x) {
        const node = { value: x };
        if (!this.head) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this._size++;
    }
    pop() {
        if (!this.head) {
            return -1;
        }
        else {
            const value = this.head.value;
            this.head = this.head.next;
            this._size--;
            return value;
        }
    }
    empty() {
        if (!this.head)
            return 1;
        return 0;
    }
    top() {
        if (!this.head)
            return -1;
        return this.head.value;
    }
    clear() {
        if (!this.head)
            return;
        this.head = undefined;
        this._size = 0;
    }
}
const leftStack = new StackClass();
const rightStack = new StackClass();
const fs = require('fs');
const input = fs.readFileSync('./예제.txt').toString().split('\n');
const answer = [];
for (let i = 1; i < input.length; i++) {
    const inputText = input[i].split("");
    console.log(inputText);
    for (let j = 0; j < inputText.length; j++) {
        switch (inputText[j]) {
            case "(":
                leftStack.push(1);
                console.log("left");
                break;
            case ")":
                rightStack.push(1);
                console.log("right");
                break;
        }
        if (leftStack.size() < rightStack.size()) {
            answer.push("NO");
            break;
        }
    }
    console.log(leftStack.size(), rightStack.size());
    if (leftStack.size() === rightStack.size()) {
        answer.push("YES");
    }
    if (leftStack.size() > rightStack.size()) {
        answer.push("NO");
    }
    leftStack.clear();
    rightStack.clear();
}
console.log(answer.join("\n"));
