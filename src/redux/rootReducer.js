import { combineReducers} from 'redux'
import bankReducer from './bank/bankReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    user: userReducer,
    bank: bankReducer
})

export default rootReducer