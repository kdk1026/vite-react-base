import { decrement, increment, incrementByAmount, reset } from "@/store/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Redux = () => {
    const counter = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    
    const handleReset = () => {
        dispatch(reset());
    };

    const handleIncrementByFive = () => {
        dispatch(incrementByAmount(10));
    };

    return (
        <div>
            <h2>Count: {counter}</h2>
            <button onClick={handleIncrement}>증가 (+1)</button>
            <button onClick={handleDecrement}>감소 (-1)</button>
            <button onClick={handleIncrementByFive}>10 증가 (+10)</button>
            <button onClick={handleReset}>초기화</button>
        </div>
    )
};

export default Redux;