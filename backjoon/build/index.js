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
}
const myStack = new StackClass();
const fs = require('fs');
const input = fs.readFileSync('./예제.txt').toString().split('\n');
for (let i = 1; i < input.length; i++) {
    switch (input[i]) {
        case "top":
            console.log(myStack.top());
        case "size":
            console.log(myStack.size());
        case "pop":
            console.log(myStack.pop());
        case "empty":
            console.log(myStack.empty());
        default:
            const pushNumber = input[i].split(" ")[1];
            myStack.push(parseInt(pushNumber));
    }
}
