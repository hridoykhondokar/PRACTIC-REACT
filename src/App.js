import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
 

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/home'>
                <Home></Home>
            </Route>

            <Route path = "/users/:userId">
                 <FriendsDetails></FriendsDetails>
            </Route>

            <Route exact path='/'>
                <Home></Home>
            </Route>


            <Route path='*'>
                <NoMatch></NoMatch>
            </Route>

          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
