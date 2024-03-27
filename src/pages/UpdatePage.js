// UpdatePage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo } from '../redux/todoSlice';

function UpdatePage() {
    const { id } = useParams();
    const todo = useSelector((state) =>
        state.todos.find((todo) => todo.id === parseInt(id))
    );
    const [updatedTodoText, setUpdatedTodoText] = useState(todo ? todo.text : '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!updatedTodoText.trim()) return;
        dispatch(updateTodo({ id: parseInt(id), text: updatedTodoText }));
        navigate('/');
    };

    return (
        <div>
            <h2>Update Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={updatedTodoText}
                    onChange={(e) => setUpdatedTodoText(e.target.value)}
                    placeholder="Enter updated todo"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdatePage;
