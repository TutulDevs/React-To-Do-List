import { useState } from 'react';
import './TodoForm.css';

function TodoForm() {

    const [todos, setTodos] = useState({
        todo: '',
        time: '',
        isDone: false, 
    });

    const onInputChange = e => {
        const time = new Date().toLocaleString();
        const todo = e.target.value;

        setTodos({
            todo,
            time,
            isDone: false,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // send it to firebase via axios
        console.log(todos);
    }

    return (
        <form className='TodoForm' onSubmit={onSubmitHandler}>
            <div>
                <input type='text' placeholder='What to do?' maxLength='50' required onChange={onInputChange} />

                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export default TodoForm;