import React, { useEffect } from 'react';
import './App.css';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch]=useStateValue();

  // useEffect <<< Powerfull
  // Piece of code which runs based on given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in

        dispatch ({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // the use is logged out

        dispatch ({
          type: "SET_USER",
          user: null,
        });
      }
    })
    return () => {
      unsubscribe();
    }
  }, []);

  console.log("User is :", user);

  return (
    <Router> 
    <div className="app">
      <Switch>
       <Route path="/checkout">
         <Header/>
         <Checkout/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="/">
         <Header/>
         <Home/>
       </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
