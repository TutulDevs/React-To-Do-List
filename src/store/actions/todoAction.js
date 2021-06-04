import axios from "../../axios";

/////////////////////////
//      SEND the TODO
export const todoStart = () => {
  return {
    type: "TODO_START",
  };
};

export const todoSuccess = (id, todoData) => {
  return {
    type: "TODO_SUCCESS",
    todoId: id,
    todoData,
  };
};

export const todoFail = (error) => {
  return {
    type: "TODO_FAIL",
    error,
  };
};

// when you send by clicking "ADD"
export const todoSend = (todoData, token) => {
  return (dispatch) => {
    // dispatch the initiation
    dispatch(todoStart());

    // send via axios
    axios
      .post("/todos.json?auth=" + token, todoData)
      .then((res) => {
        console.log(res.data);
        dispatch(todoSuccess(res.data.name, todoData));
      })
      .catch((err) => {
        console.log(err);
        dispatch(todoFail(err));
      });
  };
};

/////////////////////////
//      FETCH the TODOS
export const fetchTodosStart = () => {
  return {
    type: "FETCH_TODOS_START",
  };
};

export const fetchTodosSuccess = (todos) => {
  return {
    type: "FETCH_TODOS_SUCCESS",
    todos,
  };
};

export const fetchTodosFail = (error) => {
  return {
    type: "FETCH_TODOS_FAIL",
    error,
  };
};

export const fetchTodos = (token, userId) => {
  return (dispatch) => {
    // dispatch Start
    dispatch(fetchTodosStart());

    // make query param
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    // get from FB
    axios
      .get("/todos.json" + queryParams)
      .then((res) => {
        // send the data obj in the component and covert into array there
        // dispatch
        dispatch(fetchTodosSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchTodosFail(err));
      });
  };
};

// url to see the json data
//let url = 'https://todo-3470-default-rtdb.firebaseio.com/todos.json?auth=eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwMjUxYWIxYTJmYzFkMzllNDMwMWNhYjc1OTZkNDQ5ZDgwNDI1ZjYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9kby0zNDcwIiwiYXVkIjoidG9kby0zNDcwIiwiYXV0aF90aW1lIjoxNjIyODIyNzEzLCJ1c2VyX2lkIjoiaHp1djQ1RlZjc1VPR0NOOXVkaWg0UlRRYWQ5MiIsInN1YiI6Imh6dXY0NUZWY3NVT0dDTjl1ZGloNFJUUWFkOTIiLCJpYXQiOjE2MjI4MjI3MTMsImV4cCI6MTYyMjgyNjMxMywiZW1haWwiOiJtZWRoYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVkaGFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.dA2gI7BWPxb3U1QPqGUok--_XZ1am0Uzwfgv5JFitXzTrKH7u9QAPWn3uphgu7hvIW2oSxS2Erctbwc_Cw4U4xPft2UP3VBjwjSSuAGzGg6Fg4vSzurQGf4z0aSKEjEKVfxSUGYub6Haxw4WRJTYI-4rIHsAI8JwVZzy-UsdmNiHb7_rdY19luMk-hsUpyE62Q3oymc5fQz5BP6ECX1MJZ883LR8_MUjFTuP4PzvFvi-NXNEVQoEjEjqnBHJuI9tagBXQ3ctsZ8eV2ZafGqL-r5ruyVgXJ8riwy5hZGVurNY9RxJxRPRkWSDCugLY26TcuL-ieEbKn4o4Bk2-_3Lyg&orderBy="userId"&equalTo="hzuv45FVcsUOGCN9udih4RTQad92"'
