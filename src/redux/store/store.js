import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../state/counter/counterSlice'
import todosReducer from "../state/todos/todosSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        todosR: todosReducer 
    } 

})

