function reducer(state = [], action) {
    let parameter = action.type;
    let updatedState = { ...state };
    switch (parameter) {
        case "login_register":
            updatedState.currentUser = action.data[0];
            return updatedState;
        default:
            return updatedState;
    }
}

export default reducer;