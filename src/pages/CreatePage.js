import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ text: todoText }));
        setTodoText('');


        const newTodo = { id: Date.now(), text: todoText };
        const persistedState = JSON.parse(localStorage.getItem('todos')) || [];
        const updatedState = [...persistedState, newTodo];
        localStorage.setItem('todos', JSON.stringify(updatedState));

        navigate('/');
    };

    return (
        <div>
            <h2>Create Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Enter todo"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreatePage;
