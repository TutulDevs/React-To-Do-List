import { updatedObj } from '../../shared/utility';

const initState = {
    todos: [],
    todoSent: false,
    loading: false,
}

// Create, Complete, Delete


const todoReducer = (state = initState, action) => {
    switch(action.type) {

        // for Sending //
        case 'TODO_START':
            return updatedObj(state, {loading: true});

        case 'TODO_SUCCESS': 
            const newTodo = updatedObj(action.todoData, {id: action.todoId});
            return updatedObj(state, {
                loading: false,
                todoSent: true,
                todos: state.todos.concat(newTodo),
            })
        
        case 'TODO_FAIL': 
            return updatedObj(state, {
                loading: false,
                todoSent: false,
            });

        // for Fetching //

        default: 
            return state;
    }
}

export default todoReducer;