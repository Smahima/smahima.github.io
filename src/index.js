import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import BaseLayout from './components/BaseLayout';
import Projects from './components/Projects';
import Resume from './components/Resume';

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume}/>
    </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
