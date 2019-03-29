import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './about';
import Classes from './classes';
import Nutrition from './nutrition';
import Contact from './contact';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route} from "react-router-dom";


const AppRouter = () => (
  <Router>
    <div>
    <Route path="/" exact={true} component={App} />
      <Route path="/Home"  component={App} />
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/classes" component={Classes}/>
       <Route path="/nutrition" component={Nutrition}/>
    </div>
  </Router>
);

ReactDOM.render(<AppRouter/>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
