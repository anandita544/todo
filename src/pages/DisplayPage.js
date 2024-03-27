import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTodo } from '../redux/todoSlice';

function DisplayPage() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id }));
    };

    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <div>
            <h2>Todo List</h2>
            {Array.isArray(todos) && todos.length > 0 ? (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            <button onClick={() => handleUpdate(todo.id)}>Update</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos found.</p>
            )}
        </div>
    );

}

export default DisplayPage;
