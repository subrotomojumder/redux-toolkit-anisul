import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from '../redux/state/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='card ml-[30%] mt-8'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className='bg-gray-200 p-4'>
                    <h1 className='text-xl'>My counter App</h1>
                </div>
                <div className="card-body">
                    <h1 className='text-3xl mb-4'>{count}</h1>
                    <div className="card-actions justify-center">
                        <button onClick={()=>dispatch(increment())} className="btn btn-primary">Increase</button>
                        <button onClick={()=>dispatch(decrement())} className="btn btn-secondary">Decrease</button>
                        <button onClick={()=>dispatch(reset())} className="btn btn-secondary">reset</button>
                        <button onClick={()=>dispatch(increaseByAmount(5))} className="btn btn-secondary">Plus-5</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;     