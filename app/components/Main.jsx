var React = require('react');
var Nav = require('Nav');
var marketData = require('marketData');
var Footer = require('Footer');
var Main = React.createClass({
  
  componentDidMount: function() {
    console.log("Mounted!");
    marketData.getNJData();
    
  },
  
  render: function() {
    return (
      <div>
        
        <Nav/>
        
        <br></br>
        
        {this.props.children}


        <Footer />
      </div>
    );
  }
});

module.exports = Main;