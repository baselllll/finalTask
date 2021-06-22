export const UserAddReducer = (state,action) => {
    if(action.type === 'Add-User'){
        return action.payload
    }
    return state
}