import { createSlice } from "@reduxjs/toolkit"

import { todosList } from './Data';
const todoSlice = createSlice({
    name: "todos",
    initialState: todosList,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }
    }
})
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer