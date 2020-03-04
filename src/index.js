import path from "path";

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  Items from './pages/Items.jsx';
import  Contact from './pages/Contact.jsx';
import  Categories from './pages/Categories.jsx';
import * as serviceWorker from './serviceWorker';
import Sidebar from "./components/Sidebar";
import Notfound from "./pages/NotFound";
import "../node_modules/semantic-ui-css/semantic.min.css"

// import semanticCssPath;

ReactDOM.render((
    <Router>
    <div className="App">
        <div className="container">
            <div className="row">
                <Sidebar/>
            </div>
            <div className="row form-side">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/items" component={Items} />
                    <Route path="/cat" component={Categories} />
                    <Route  path="/contact" component={Contact} />
                    <Route  path="*" component={Notfound} />
                </Switch>
            </div>
        </div>
    </div>
    </Router>
    ), document.getElementById('root'));

serviceWorker.unregister();
