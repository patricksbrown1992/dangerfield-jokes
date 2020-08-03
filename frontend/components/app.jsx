import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashForm from './splash/splashForm';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import jokesIndex from '../components/jokes/jokeIndexContainer';
import LogInForm from './logIn/logInContainer';
import SignUpForm from './signUp/signUpContainer';


const App = () => (

    <>

        <Switch>
 
            <ProtectedRoute path='/jokes' component={jokesIndex}/>
            <Authorized exact path='/' component={SplashForm} />
            <Authorized exact path='/login' component={LogInForm} />
            <Authorized exact path='/signup' component={SignUpForm} />
           
        </Switch>
    </>


)
export default App;