import axios from "../../axios";

/////////////////////////
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


/////////////////////////
//      FETCH the TODOS
export const fetchTodosStart = () => {
    return {
        type: 'FETCH_TODOS_START',
    }
}

export const fetchTodosSuccess = todos => {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        todos,
    }
}

export const fetchTodosFail = error => {
    return {
        type: 'FETCH_TODOS_FAIL',
        error,
    }
}

export const fetchTodos = (token, userId) => {
    return dispatch => {
        // dispatch Start
        dispatch(fetchTodosStart());
        
        // make query param
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        // get from FB
        axios
        .get("/todos.json" + queryParams )
        .then((res) => {
            // convert the obj into an arr
            let todoArr = [];
            for (let key in res.data) {
                todoArr.push({
                    ...res.data[key],
                    id: key,
                })
            }
            console.table(res.data);
            console.table(todoArr);
                
            // dispatch
            dispatch(fetchTodosSuccess(todoArr));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchTodosFail(err));
        });
    }
}
