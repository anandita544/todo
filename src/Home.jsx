import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
function Home() {
    const todos = useSelector((state) => state.todos);

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
                                <Link className="btn btn-sm btn-danger">DELETE</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
