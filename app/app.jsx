var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var $ = require('jQuery');

var Main = require('Main');
var Home = require('Home');
var About = require('About');
var Contact = require('Contact');
var Services = require('Services');
var Market = require('Market');
var Choices = require('Choices');
var Quote = require('Quote');



// load foundation


require('style!css!foundation-sites/dist/foundation.min.css');
// $(document).foundation();
// load APP Css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="services" component={Services}/>
      <Route path="choices" component={Choices}/>
      <Route path="market" component={Market}/>
      <Route path="quote" component={Quote}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
);