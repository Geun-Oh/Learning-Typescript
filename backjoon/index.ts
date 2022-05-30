interface MyStack {
    size(): number;
    push(x: number): void;
    pop(): number;
    empty(): 0 | 1;
    top(): number;
}

type MyStackNode = {
    value: number;
    next?: MyStackNode;
}

class StackClass implements MyStack {
    private _size: number = 0;
    private head?: MyStackNode;
    private tail?: MyStackNode;

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
}

const myStack = new StackClass();

console.log(myStack);
myStack.push(1);
console.log(myStack);
myStack.push(2);
console.log(myStack);
console.log(myStack.top());
