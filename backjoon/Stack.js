// 스택 클래스
var StackExample = /** @class */ (function () {
    function StackExample() {
        this._size = 0; // _size 값을 외부에서 접근하지 못하도록 묶는다.
    }
    Object.defineProperty(StackExample.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    // 스택 추가
    StackExample.prototype.push = function (value) {
        var node = { value: value };
        if (this._size === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this._size++;
    };
    // 스택 제거
    StackExample.prototype.pop = function () {
        var _a;
        if (!this.head)
            throw new Error("Stack is Empty!"); // 노드가 하나도 없다면 에러 발생
        if (this.head.value === ((_a = this.tail) === null || _a === void 0 ? void 0 : _a.value)) {
            this.tail = undefined;
        }
        var next = this.head.next;
        this.head = next;
        this._size--;
    };
    // 스택 검색 = index
    StackExample.prototype.search = function (num) {
        // 스택이 하나도 없거나 해당하는 스택이 없을 경우에 에러 발생
        if (!this.head) {
            throw new Error("Stack is Empty!");
        }
        else if (num < 0 || num >= this._size) {
            throw new Error("No corresponding Stacks Found..");
        }
        var count = this._size - 1;
        var current = this.head;
        while (count > num) {
            current = current.next; // 확정 할당 연산자. 값이 없는 경우가 없을테니 걱정말고 사용하라고 ts에게 말해주는 용도로 뒤에 !를 붙였다.
            count--;
        }
        return current === null || current === void 0 ? void 0 : current.value;
    };
    return StackExample;
}());
var stack = new StackExample(); // 클래스 생성
console.log(stack); // 초기 데이터
// 데이터 추가
stack.push('google');
console.log(stack);
stack.push('samsung');
console.log(stack);
stack.push('lg');
console.log(stack);
// index 확인
console.log(stack.search(0), stack.search(1), stack.search(2));
// 데이터 제거
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
