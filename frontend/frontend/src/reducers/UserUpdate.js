export const UserUpdateReducer = (state,action) => {
    if(action.type === 'Update-User'){
        return action.payload
    }
    return state
}