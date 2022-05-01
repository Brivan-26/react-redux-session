import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { deposit } from "../redux/bank/bankActions"
const BankComponent = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)
    const balance = useSelector((state) => state.bank.balance)
    return (
        <div>
            <h1>Your current balance is: {balance}</h1>
            <div>
                <input value={input} onChange={e => setInput(e.target.value)} type="number" placeholder="Enter the amount you want to deposit to your account"/>
                <button onClick={() => dispatch(deposit(input))} type="button">Deposit!</button>
            </div>
        </div>
    )
}

export default BankComponent