import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Switch,Route, Redirect} from "react-router-dom";
const App=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
        </Switch>
        <Footer/>
        </>
    );
}
export default App;