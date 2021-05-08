import Home from './pages/Home';
import Raffle from './pages/Raffle';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="header">
        <h1>Todos por Thiago</h1>
      </header>
      <Switch>
        {/* <Route exact path="/sorteo">
          <Raffle allowRaffle />
        </Route> */}
        <Route path="/todos-por-thiago/ganadores">
          <Raffle />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/todos-por-thiago">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
