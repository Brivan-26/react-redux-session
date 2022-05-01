
const deposit = (value) => {
    return {
        type: 'DEPOSIT',
        payload:value
    }
}



export {deposit}