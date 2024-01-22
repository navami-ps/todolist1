const initialData = {
    list: []
}

const todoreducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [...state.list, { id: id, data: data }]
            }
        case "DELETE_TODO":
            const newList = state.list.filter((elem) => elem.id !== action.id); // Removed the extra "=" sign
            return {
                ...state,
                list: newList
            }
        default:
            return state;
    }
}

export default todoreducers;
