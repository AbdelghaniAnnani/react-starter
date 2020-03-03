import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  Items from './pages/Items.jsx';
import  Contact from './pages/Contact.jsx';
import  Categories from './pages/Categories.jsx';
import * as serviceWorker from './serviceWorker';
import Sidebar from "./components/Sidebar";
import Submission from "./components/Submission";

ReactDOM.render((
    <Router>
    <div className="App">
        <div className="container">
            <div className="row">
                <Sidebar/>
            </div>
            <div className="row form-side">
                    <Route exact path="/" render={App} />
                    <Route path="/items" render={Items} />
                    <Route path="/cat" render={Categories} />
                    <Route path="/contact" render={Contact} />
            </div>
        </div>
    </div>
    </Router>
    ), document.getElementById('root'));

serviceWorker.unregister();
