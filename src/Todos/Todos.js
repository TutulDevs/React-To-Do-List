import './Todos.css';

import Header from '../Header/Header';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

function Todos() {
    
    return (
        <main className='Main'>
            <Header />
            
            <div className='Container'>
                <TodoForm />
                <TodoList />
            </div>
        </main>
    )
}

export default Todos;