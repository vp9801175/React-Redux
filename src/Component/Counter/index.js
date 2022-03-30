import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, incrementByNumber,decrement,decrementByNumber } from "../../actions";

const Counter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const [number, setnumber] = useState(0);

    return (
        <>
          <div>
            <h2>Counter: {counter}</h2>
            <button onClick={() => dispatch(increment())}>Increment by 1</button>
            <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
          </div>
          <div>
            <input onChange={e => setnumber(e.target.value)}/>
            <button onClick={() => dispatch(incrementByNumber(number))}>Increment by value</button>
            <button onClick={() => dispatch(decrementByNumber(number))}>Decrement by value</button>
          </div>
        </>
      );
}

export default Counter