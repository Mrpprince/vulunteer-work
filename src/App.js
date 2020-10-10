import React, { createContext, useState } from 'react';
import './App.css';
import bootstrap from './dist/css/bootstrap.min.css'
import MainBody from './Components/MainBody/MainBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserId from './Components/UserId/UserId';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <MainBody></MainBody>
        </Route>
        <Route path="/home">
          <MainBody></MainBody>
        </Route>
        <PrivateRoute path="/registration/:id">
          <Registration></Registration>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/userIdInfo">
            <UserId></UserId>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
