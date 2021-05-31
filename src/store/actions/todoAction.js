
/////////////////////////

import axios from "../../axios";

//      SEND the TODO
export const todoStart = () => {
    return {
        type: 'TODO_START',
    }
}

export const todoSuccess = (id, todoData) => {
    return {
        type: 'TODO_SUCCESS',
        todoId: id,
        todoData,
    }
}

export const todoFail = (error) => {
    return {
        type: 'TODO_FAIL',
        error,
    }
}

// when you send by clicking "ADD"
export const todoSend = (todoData, token) => {
    return dispatch => {
        // dispatch the initiation
        dispatch(todoStart());

        // send via axios 
        axios
            .post('/todos.json?auth=' + token, todoData)
            .then(res =>{
                //console.log(res.data);
                dispatch(todoSuccess(res.data.name, todoData));
            })
            .catch(err => dispatch(err));
    }
}