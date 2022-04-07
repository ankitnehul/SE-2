import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AppNavbar from "./component/AppNavbar";
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/AdminLogin";
import CustomerLogin from "./pages/CustomerLogin";
import Register from "./pages/register";
import CustomerPage from "./pages/CustomerPage";
import AdminPage from "./pages/AdminPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/adminLogin" component={AdminLogin}></Route>
        <Route exact path="/customerLogin" component={CustomerLogin}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/customerpage" component={CustomerPage}></Route>
        <Route exact path="/adminpage" component={AdminPage}></Route>
      </Switch>
    </Router>
  );
}
export default App;
