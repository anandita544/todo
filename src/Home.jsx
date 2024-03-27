import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deleteTodo } from './TodoReducer'
function Home() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }))
    }
    return (
        <div className='container'>
            <h2></h2>
            <Link to="/create" className='btn btn success my 3'>CREATE +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>


                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>

                            <td>
                                <Link to={`/edit/${todo.id}`} className="btn btn-sm btn-primary">EDIT</Link>
                                <button onClick={() => handleDelete(todo.id)} className="btn btn-sm btn-danger">DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
