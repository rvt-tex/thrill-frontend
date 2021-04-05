import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import './App.css';
import { clearToken } from './services/localSorage';

function App() {

  const handleLogout = () => {
    clearToken()
  }

  return (
    
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
        </switch>

        <button onClick={handleLogout}>Log Out</button>
      </div>
    </Router>
    
  );
}

export default App;
