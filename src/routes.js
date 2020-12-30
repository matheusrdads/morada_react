import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer'
import Home from './views/Home';


export default function Routes(){
    return(
        <BrowserRouter>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
    );
}