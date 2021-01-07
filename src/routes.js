import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer'
import Home from './views/Home';
import Sobre from './views/Sobre';
import Servicos from './views/Servicos';
import Componente_construcao from './components/Componente_construcao';
import Componente_manutencao from './components/Componente_manutencao';

export default function Routes(){
    return(
        <BrowserRouter>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sobre" component={Sobre}/>
            <Route exact path="/servicos" component={Servicos}/>
            <Route exact path="/componente_construcao" component={Componente_construcao}/>
            <Route exact path="/componente_manutencao" component={Componente_manutencao}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
    );
}