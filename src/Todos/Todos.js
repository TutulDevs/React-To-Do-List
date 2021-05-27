import './Todos.css';

import Navbar from '../Navbar/Navbar';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

function Todos() {
    
    return (
        <main className='Main'>
            <Navbar />
            
            <div className='Container'>
                <TodoForm />
                <TodoList />
            </div>
        </main>
    )
}

export default Todos;