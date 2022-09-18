import { useContext } from "react";
import AccountContext from "../context/AccountContext";

const Balance = () => {
    const { balance } = useContext(AccountContext);
    return (
        <>
            <h4>Your balance</h4>
            <h1>${balance}</h1>
        </>
    )
}

export default Balance
