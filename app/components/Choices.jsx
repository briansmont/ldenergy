var React = require('react');
var fixed = '<ul><u>The Basics</u><li>Deregulated markets allow you to choose your supplier for electricity & natural gas</li><li>Your utility company will continue to maintain the delivery and distribution of the commodities</li></ul>';
var process =  '<ul><u>The Process</u><li>Consultation with the client to determine short & long term goals</li><li>LD Energy will present alternatives taking into account these goals, combined with market opportunity and risk tolerance</li></ul>';
var products = '<ul><u>Product Options</u><li>What are the goals for energy spend?</li><li>How much risk is the client comfortable with?</li><li>Take into account the time of year and the terms of various opportunities</li></ul>';

var Choices = React.createClass({
    
  componentDidMount: function() {
    window.scrollTo(0,0);
    this.makeBasics();
  },
  
  makeBasics: function() {
    document.getElementById('details').innerHTML = fixed;
    document.getElementById('link').innerHTML = '<a href="#/Basics">Learn More</a>';
    document.getElementById('focusbasics').focus();
  },
  
  makeProcess: function() {
    document.getElementById('details').innerHTML = process;
    document.getElementById('link').innerHTML = '<a href="#/Process">Learn More</a>';
    // document.getElementById('focusprocess').focus();
  },
  
  makeProduct: function() {
    document.getElementById('details').innerHTML = products;
    document.getElementById('link').innerHTML = '<a href="#/Products">Learn More</a>';
    // document.getElementById('focusproducts').focus();
  },
  
  
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Choose Your Own Supplier</h1>
        <div className="childwidth">
          <div className="row">
            <div className="columns medium-6">
            <img src="https://s3.us-east-2.amazonaws.com/ldwebsite/localvscompetitive.jpg"></img>
            </div>
            <div className="columns medium-6">
            <p>In a deregulated energy market, you can purchase your electricity or natural gas through a third-party supplier rather than default service through your utility.</p>
            </div>
          </div>
          <div className="center-tabs padding-top">
            <ul className="tabs menu" data-tabs id="example-tabs">
              <li className="tabs-title is-active"><a href="javascript:'" id="focusbasics" className="link-active" onClick={this.makeBasics}>Basics</a></li>
              <li className="tabs-title"><a href="javascript:'" id="focusprocess" className="link-active"onClick={this.makeProcess}>Process</a></li>
              <li className="tabs-title"><a href="javascript:'" id="focusproducts" className="link-active" onClick={this.makeProduct}>Product Options</a></li>
            </ul>
          </div>
          <div className="text-info childwidth">
            <p id="details">
              
            </p>
            <p id="link"></p>
          </div>
        </div>
      </div>
    );
  }
  
});

module.exports = Choices;