import './App.css';
import Home from './components/Home';
import { AccountProvider } from './context/AccountContext';

function App() {
  return (
    <AccountProvider>
      <div className="container">
        <Home />
      </div>
    </AccountProvider>
  );
}

export default App;
