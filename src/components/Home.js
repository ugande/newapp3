import { useContext } from "react";
import Header from "./Header";
import Balance from "./Balance";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

import AccountContext from "../context/AccountContext";


const Home = () => {
    const { showDeposit } = useContext(AccountContext);

    return (
        <>
            <Header />
            <Balance />
            {showDeposit ? <Deposit /> : <Withdraw />}
        </>
    )
}

export default Home;
