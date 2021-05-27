import './TodoForm.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../store/actions/todoAction';


function TodoForm(props) {

    const [singleTodo, setsingleTodo] = useState({
        todo: '',
        time: '',
        completed: false, 
    });

    const handleChange = e => {
        const time = new Date().toLocaleString();
        const todo = e.target.value;

        setsingleTodo({
            todo,
            time,
            completed: false,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // send it to firebase via axios
        //console.log(singleTodo);
        props.createTodo(singleTodo)
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <div>
                <input type='text' placeholder='What to do?' maxLength='50' required onChange={handleChange} />

                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createTodo: todo => dispatch(createTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(TodoForm);