import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updateTodo } from './TodoReducer'


function Update() {
    const { id } = useParams();
    const todos = useSelector((state) => state.todos)
    const existingtodo = todos.filter(f => f.id == id);
    const { name } = existingtodo[0];
    const [uname, setName] = useState(name);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateTodo({
            id: id,
            name: uname
        }))
        navigate('/')
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text white p-5'>
                <h1>UPDATE TODO:</h1>
                <form onSubmit={handleUpdate} >
                    <div>
                        <label htmlFor="name">Todo:</label>
                        <input type="text" name="name" className="form-control" placeholder="enter todo..." value={uname} onChange={e => setName(e.target.value)} />
                    </div>
                    <br></br>
                    <button className="btn btn-info">UPDATE</button>
                </form>
            </div>
        </div>
    )
}

export default Update