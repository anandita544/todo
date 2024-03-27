import { createSlice } from "@reduxjs/toolkit"

import { todosList } from './Data';
const todoSlice = createSlice({
    name: "todos",
    initialState: todosList,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }
        ,
        updateTodo: (state, action) => {
            const { id, name } = action.payload;
            const uu = state.find(todo => todo.id == id);
            if (uu) {

                uu.name = name;

            }
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(todo => todo.id == id);
            if (uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer