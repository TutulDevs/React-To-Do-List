import './TodoForm.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { todoSend } from '../../store/actions/todoAction';



function TodoForm(props) {

    const [singleTodo, setsingleTodo] = useState({
        todo: '',
        date: '',
        completed: false, 
        userId: '',
    });

    const handleChange = e => {
        const created = new Date().toLocaleString();
        const todo = e.target.value;

        setsingleTodo({
            todo,
            date: created, 
            completed: false,
            userId: props.userId,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // send the state to FB
        props.onTodoSend(singleTodo, props.token); 

        // reset
        e.target.reset();
    }

    let button = <button className='submitBtn' type='submit'>Add</button>;
    if(props.loading) button = <p className='submitBtn'>Loading...</p>;

    return (
        <form className='TodoForm' id='form' onSubmit={handleSubmit}>
            <div>
                <input type='text' placeholder='What to do?' maxLength='50' required onChange={handleChange} />

                { button }
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.todo.loading,
        todoSent: state.todo.todoSent,
        token: state.auth.token, 
        userId: state.auth.userId, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoSend: (todoData, token) => dispatch(todoSend(todoData, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);