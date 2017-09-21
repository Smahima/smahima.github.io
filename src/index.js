import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import References from './components/References';


ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About}/>
      <Route path="/home" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts}/>
      <Route path="/references" component={References}/>
    </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
