import { useContext, useState } from "react";
import AccountContext from "../context/AccountContext";

const Deposit = () => {
    const [amount, setAmount] = useState(0);
    const { deposit } = useContext(AccountContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!amount) {
            alert('Please enter an amount');
            return
        }

        setAmount('');
        deposit(+amount);
    }
    return (
        <>
            <h3>Deposit</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="amount">Enter amount</label>
                    <input type="text" name="amount" value={amount} placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Deposit</button>
            </form>
        </>
    )
}

export default Deposit
