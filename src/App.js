import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      {/* <h1 className="font-body fw-bold">THis is header</h1> */}

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
