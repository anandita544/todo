import React, { useState } from 'react'
import { addTodo } from './TodoReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Create() {
    const [name, setName] = useState('')
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({ id: todos[todos.length - 1].id + 1, name }))
        navigate('/')
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text white p-5'>
                <h1>ADD NEW TODO:</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Todo:</label>
                        <input type="text" name="name" className="form-control" placeholder="enter todo..." onChange={e => setName(e.target.value)} />
                    </div>

                    <button className="btn btn-info">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Create