import { useReducer } from "react";
import { counterInitialScore, counterReducer } from "@/reducers/counterReducer";

const Reducer = () => {
    const [state, localDispath] = useReducer(counterReducer, counterInitialScore);

    const handleIncrement = () => {
        localDispath({ type: 'INCREMENT' });
    };

    const handleDecrement = () => {
        localDispath({ type: 'DECREMENT' });
    };
    
    const handleReset = () => {
        localDispath({ type: 'RESET' });
    };

    const handleIncrementByFive = () => {
        localDispath({ 
            type: 'INCREMENT_BY_AMOUNT',
            payload: 5
        });
    };

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={handleIncrement}>증가 (+1)</button>
            <button onClick={handleDecrement}>감소 (-1)</button>
            <button onClick={handleIncrementByFive}>5 증가 (+5)</button>
            <button onClick={handleReset}>초기화</button>
        </div>
    )
};

export default Reducer;