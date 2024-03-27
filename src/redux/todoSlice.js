// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const persistedState = JSON.parse(localStorage.getItem('todos')) || [];

const initialState = {
    todos: persistedState,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = { id: Date.now(), text: action.payload.text };
            state.todos = [...state.todos, newTodo];
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
