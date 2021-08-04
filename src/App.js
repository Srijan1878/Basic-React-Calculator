import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './pages/home/Home';
import Add from './pages/add/Add';
import Divide from './pages/Divide/Divide';
import Multiply from './pages/multiply/Multiply';
import Subtract from './pages/subtract/Subtract';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
        <Home/>
        </Route>
        <Route path="/add" >
        <Add/>
        </Route>
        <Route path="/divide" >
        <Divide/>
        </Route>
        <Route path="/multiply" >
        <Multiply/>
        </Route>
        <Route path="/subtract" >
        <Subtract/>
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
