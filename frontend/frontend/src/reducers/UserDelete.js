export const UserDeleteReducer = (state,action) => {
    if(action.type === 'Delete-User'){
        return action.payload
    }
    return state
}