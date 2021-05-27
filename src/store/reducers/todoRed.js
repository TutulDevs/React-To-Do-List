import { updatedObj } from '../../shared/utility';

const initState = {
    todos: [
        {id: '1', todo: 'help me find peach', time: '5/28/2021, 12:34:06 AM', completed: false},
        {id: '2', todo: 'collect all the stars', time: '5/28/2021, 12:34:06 AM', completed: false},
        {id: '3', todo: 'egg hunt with yoshi', time: '5/28/2021, 12:34:06 AM', completed: false},
    ],
    error: null,
    loading: false,
}

// Create, Complete, Delete


const todoReducer = (state = initState, action) => {
    switch(action.type) {

        case 'CREATE_TODO': 
            return updatedObj(state, {
                todos: action.todo,
                error: null, 
                loading: true,
            })

        default: 
            return state;
    }
}

export default todoReducer;