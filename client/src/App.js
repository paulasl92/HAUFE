import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./component/Navbar";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import { UserRoute } from "./component/privateRoute";
import NotFoundPage from "./component/NotFoundPage";


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <UserRoute path="/home">
          <Home />
        </UserRoute>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
