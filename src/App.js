import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="*" >
            <h1>This page is not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
