import { useContext } from "react";
import AccountContext from "../context/AccountContext";


const Navbar = () => {
  const {onAdd, showDeposit} = useContext(AccountContext);
  return (
    <nav>
      <ul className="menu">
        <li onClick={onAdd}>{showDeposit ? 'Withdraw' : 'Deposit'}</li>
      </ul>
    </nav>
  )
}

export default Navbar
