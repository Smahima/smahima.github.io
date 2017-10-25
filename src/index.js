import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Contact from './components/Contact';
import Project from './components/Project';
import Process from './components/Process';
import Resume from './components/Resume';


ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/project" component={Project} />
      <Route path="/process" component={Process}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
