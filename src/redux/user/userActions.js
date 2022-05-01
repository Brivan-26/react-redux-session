import {UPDATE_USERNAME} from './userTypes'

const updateUsername = (value) => {
   return {
       type: UPDATE_USERNAME,
       payload: value
   }
}

export {updateUsername}