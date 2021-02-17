import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./component/Navbar";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import HomeUser from "./pages/HomeUser";
import { UserRoute } from "./component/privateRoute";
import NotFoundPage from "./component/NotFoundPage";


function App() {
  
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <UserRoute path="/" exact component={HomeUser}/>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
