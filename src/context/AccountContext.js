import { createContext, useReducer, useState } from "react";
import AccountReducer from './AccountReducer';

// Initial state
const initialState = {
    balance: 250
}

// Create context
const AccountContext = createContext(initialState);

// Provider component
export const AccountProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AccountReducer, initialState);
    const [showDeposit, setShowDeposit] = useState(true);

    function onAdd(){
        setShowDeposit(!showDeposit);
    }

    // Actions
    function deposit(amount) {
        dispatch({
            type: 'deposit',
            payload: amount
        });
    }

    function withdraw(amount) {
        dispatch({
            type: 'withdraw',
            payload: amount
        });
    }

    return (<AccountContext.Provider value={{ balance: state.balance, deposit, withdraw, showDeposit, setShowDeposit, onAdd }}>
        {children}
    </AccountContext.Provider>)
}

export default AccountContext;