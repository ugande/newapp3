const AccountReducer = ({balance}, {type,payload}) => {
    switch (type) {
        case 'deposit':
            return {
                balance: balance + payload
            }
        case 'withdraw':
            return {
                balance: balance - payload
            }
        default:
            throw new Error('action undefined');
    }
}

export default AccountReducer;