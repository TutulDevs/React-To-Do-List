//import axios from '../../axios';
//import Spinner from '../../Spinner/Spinner';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';

const TodoList = () => {
    return (
        <ul className='TodoList'>
            
            <TodoItem key='1' id='props.name' task='Get Shit Done!' date='5/31/2021, 11:34:23 PM' />

            <TodoItem key='2' id='props.name' task='Whats wrong with you?!' date='5/31/2021, 11:34:23 PM' />

        </ul>
    )
}

export default TodoList;