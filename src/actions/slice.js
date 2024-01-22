// actions/slice.js
export const addTodo = (id, data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    };
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: {
            id: id
        }
    };
}


  
