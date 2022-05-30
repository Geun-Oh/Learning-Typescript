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
console.log(myStack);
myStack.push(1);
console.log(myStack);
myStack.push(2);
console.log(myStack);
console.log(myStack.top());
