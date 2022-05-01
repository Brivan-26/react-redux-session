const initialState = {
    balance: 10
}
const bankReducer = (state = initialState, action) => {
    switch(action.type) {
        case "DEPOSIT": {
            return {
                balance: state.balance + parseInt(action.payload)
            }
        }
        default: return state;
    }
}

export default bankReducer