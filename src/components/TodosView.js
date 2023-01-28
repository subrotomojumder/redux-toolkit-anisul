import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/state/todos/todosSlice';

const TodosView = () => {
    const {isLoading, todos, error} = useSelector((state)=> state.todosR)
    console.log(isLoading, todos, error)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchTodos())
    }, [])
    return (
        <div>
            <h3 className='text-2xl mt-5'>Todos containers</h3>
            {isLoading && <p className='mt-10'>Loading......</p>}
            {error && <p className='mt-10'>{error}</p>}
            {todos && todos.map(todo=> {
                return <section key={todo.id} className="border m-20 p-10 bg-slate-300">
                    <h4 className='font-bold'>Todos ID: {todo.id}</h4>
                    <h4 className='text-3xl'>{todo.title}</h4>
                    <p className='text-xl'>Todo completion: {todo?.completed ? "Finished" : "UnFinished"} </p>
                </section>
            })}
        </div>
    );
};

export default TodosView;