import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpStep1 from "./pages/SignUpStep1";
import SignUpStep2 from "./pages/SignUpStep2";
import SignUpRegistration from "./pages/SignUpRegistration";
import ChooseAccount from "./pages/ChooseAccount";
import ChoosePlan from "./pages/ChoosePlan";
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
          <Route path="/signup/register" exact>
            <SignUpStep1></SignUpStep1>
          </Route>
          <Route path="/signup" exact>
          <SignUpStep2></SignUpStep2>
          </Route>
          <Route path="/signup/regform" exact>
            <SignUpRegistration></SignUpRegistration>
          </Route>
          <Route path="/signup/planform" exact>
            <ChoosePlan></ChoosePlan>
          </Route>
          <Route path="/welcome" exact>
            <ChooseAccount></ChooseAccount>
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
