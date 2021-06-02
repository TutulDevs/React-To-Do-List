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
            // let todoArr = [];
            // for (let key in res.data) {
            //     todoArr.push({
            //         ...res.data[key],
            //         id: key,
            //     })
            // }
            //console.log(res.data);
            //console.table(todoArr);
            // 😭 couldn't make it work
                
            // dispatch
            dispatch(fetchTodosSuccess(res.data));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchTodosFail(err));
        });
    }
}

// url to see the json data
//let url = 'https://todo-3470-default-rtdb.firebaseio.com/todos.json?auth=eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwMjUxYWIxYTJmYzFkMzllNDMwMWNhYjc1OTZkNDQ5ZDgwNDI1ZjYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9kby0zNDcwIiwiYXVkIjoidG9kby0zNDcwIiwiYXV0aF90aW1lIjoxNjIyNjQ1MTEyLCJ1c2VyX2lkIjoiaHp1djQ1RlZjc1VPR0NOOXVkaWg0UlRRYWQ5MiIsInN1YiI6Imh6dXY0NUZWY3NVT0dDTjl1ZGloNFJUUWFkOTIiLCJpYXQiOjE2MjI2NDUxMTIsImV4cCI6MTYyMjY0ODcxMiwiZW1haWwiOiJtZWRoYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVkaGFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LOddrwSLPHdMSA41FmvtSPNpZoXI6xQa0gqLRYK7ViqRyXCbb1TDNlXp9y9L2GPjQSXrOW-BRxQaH352Y8gO2_XVyr2xvAj0gOqv9Vqx5BD4H0t4bmV_f6NAyezaZYh1-YlfBgIbjqgWxnsjsIh9DW8YPI94F7UseXZwkpbh4C2I8zRm568fLCvUuwHBnDBbTYV_IQbeyTkD4LXflx3opgAa2KS95IHxQSMbFACG56MksnESya2NUO89Z88aQVtPqEce_BLveMfwKWZIMeBQ3UNwIqPVzgx2CO21R0KlYGxTwAPgMSXbqijCKebrgqfeb9KL4sSU_GMKZke3dUD9xw&orderBy="userId"&equalTo="hzuv45FVcsUOGCN9udih4RTQad92"'