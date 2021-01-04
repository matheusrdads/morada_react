import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer'
import Home from './views/Home';
import Sobre from './views/Sobre';

export default function Routes(){
    return(
        <BrowserRouter>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sobre" component={Sobre}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
    );
}