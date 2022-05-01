import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {updateUsername} from '../redux/user/userActions'
const UserComponent = () => {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.username)
    const [input, setInput] = useState(username)
    
    return (
        <div>
            <h3>Your current username is : {username} </h3>
            <div>
                <input type="text" placeholder="Enter your new username" value={input} onChange={e => setInput(e.target.value)} />
                <button onClick={() => dispatch(updateUsername(input))}>Update username!</button>
            </div>

        </div>
    )
}

export default UserComponent