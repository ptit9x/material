import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Route path='/' component={App} />
    {/* <Route path='/register' component={RegisterPage} />
      <Route path='/change' component={ChangePasswordPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <Route path='/contact' component={ContactPage} />
    <Route path='/about' component={AboutPage} /> */}
  </Router>,
  document.getElementById('root')
);
