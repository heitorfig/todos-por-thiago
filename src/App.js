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
        {/* <Route path="/sorteo">
          <Raffle />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
