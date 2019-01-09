import userAPI from './userAPI'

export function signUpUser (credentials, redirect) {
    return function (dispatch){
        return userAPI.signup(credentials)
    }
} 