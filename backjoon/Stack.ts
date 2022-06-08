// 스택 추상화 인터페이스
interface Stack {
    readonly size: number;
    push(value: string | number): void;
    pop(): void;
    search(num: number): string | number;
}

//추가될 노드 타입 생성
type StackNode = {
    value: string; // 노드에 들어갈 값
    next?: StackNode; // 다음 노드를 가리키는 포인터
}

// 스택 클래스
class StackExample implements Stack {
    private _size: number = 0; // _size 값을 외부에서 접근하지 못하도록 묶는다.
    private head?: StackNode; // head는 노드 인터페이스 타입
    private tail?: StackNode; // head는 노드 인터페이스 타입

    get size() {
        return this._size;
    }

    // 머리에 추가
    push(value: string) {
        const node: StackNode = { value };
        if(this._size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this._size++;
    }

    // 머리 제거
    pop() {
        if(!this.head) throw new Error("Stack is Empty!"); // 노드가 하나도 없다면 에러 발생
        if(this.head.value === this.tail?.value) {
            this.tail = undefined;
        }
        const next = this.head.next;
        this.head = next;
        this._size--;
    }

    // 꼬리에 추가
    unshift(value: string) {
        const node: StackNode = { value };
        if(this._size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        this._size++;
    }

    // 스택 검색 = index
    search(num: number): string {
        // 스택이 하나도 없거나 해당하는 스택이 없을 경우에 에러 발생
        if(!this.head) {
            throw new Error("Stack is Empty!");
        } else if(num < 0 || num >= this._size) {
            throw new Error("No corresponding Stacks Found..");
        }

        let count: number = this._size - 1;
        let current: StackNode = this.head;
        while(count > num) {
            current = current.next!; // 확정 할당 연산자. 값이 없는 경우가 없을테니 걱정말고 사용하라고 ts에게 말해주는 용도로 뒤에 !를 붙였다.
            count--;
        }
        return current?.value;
    }
}

// const stack = new StackExample(); // 클래스 생성
// console.log(stack); // 초기 데이터

// 데이터 추가

// stack.push('google');
// console.log(stack);
// stack.push('samsung');
// console.log(stack);
// stack.push('lg');
// console.log(stack);

// // index 확인
// console.log(stack.search(0), stack.search(1), stack.search(2));

// // 데이터 제거
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);