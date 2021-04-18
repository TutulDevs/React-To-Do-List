import './Todos.css';

import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

function Todos() {
    
    return (
        <main className='Main'>
            <TodoForm />
            <TodoList />
        </main>
    )
}

export default Todos;