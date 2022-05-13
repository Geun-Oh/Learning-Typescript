import React, { useReducer } from 'react';

//액션을 쭉 연달아 나열하자.
type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error("Unhandled Action");
    }
}
/**
 * 리듀서를 만들 때 함수의 state 타입과 리턴 타입을 동일하게 하는 것이 매우 중요하다.
 * 그래야 다양한 에러를 감지하고 실수를 방지할 수 있다.
 */

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0)
    const onIncrease = () => dispatch({ type: "INCREASE" });
    const onDecrease = () => dispatch({ type: "DECREASE" });

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;