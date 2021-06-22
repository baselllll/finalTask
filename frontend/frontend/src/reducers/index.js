import {UserDetailReducer} from  './UserDetailReducer'
import {UserListReducer} from  './userListReducer'
import {combineReducers} from 'redux';
import { UserDeleteReducer } from './UserDelete';
import { UserUpdateReducer } from './UserUpdate';
import { UserAddReducer } from './UserAdd';

export const rootReducer = () => {
  return combineReducers({
      userList:UserListReducer,
      Details:UserDetailReducer,
      DeleteUser:UserDeleteReducer,
      UpdateUser:UserUpdateReducer,
      UserAdd:UserAddReducer,
    })
}

