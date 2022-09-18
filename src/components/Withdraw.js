import { useContext, useState } from "react";
import AccountContext from "../context/AccountContext";

const Withdraw = () => {
    const [amount, setAmount] = useState(0);
    const { balance, withdraw } = useContext(AccountContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount) {
            alert('Please enter an amount');
            return
        }

        if (amount > balance) {
            alert('You cannot withdraw above your current balance');
            return
        }
        setAmount('');
        withdraw(+amount);
    }

    return (
        <>
            <h3>Withdrawal</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="amount">Enter amount</label>
                    <input type="text" name="amount" value={amount} placeholder="Enter amount to withdraw" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Withdraw</button>
            </form>
        </>
    )
}

export default Withdraw
