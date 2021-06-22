export const UserDetailReducer = (state,action) => {
    if(action.type === 'Detail-User'){
        return action.payload
    }
    return state
}