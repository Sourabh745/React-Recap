// it help you to create big object and help you tracking your store
//nanoid = unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}
 
export const todoSlice = createSlice({
    name: 'todo', // slice name
    initialState, // initial state 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid() ,
                text: action.payload, 
            } 
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload) // payload  is data it automatically compare ids
        }
    } // is just an object 
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;