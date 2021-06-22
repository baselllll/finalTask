export const UserListReducer = (state,action) => {
    if(action.type === "User-List"){
        return action.payload
    }
    return state
}