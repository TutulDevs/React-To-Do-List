
export const createTodo = todo => {
    return (dispatch, getState) => {
        // async here

        //dispatch
        dispatch({
            type: 'CREATE_TODO',    
            todo: todo,
        })
    }
}


