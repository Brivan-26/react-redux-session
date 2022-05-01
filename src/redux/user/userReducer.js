import {UPDATE_USERNAME} from './userTypes'
const initialState = {
    username: 'Abdessamed'
}
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_USERNAME:
            return {
                username: action.payload
            }
        default: return state;
    }
}

export default userReducer;