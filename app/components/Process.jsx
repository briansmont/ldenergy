var React = require('react');

var Process = React.createClass({
  componentDidMount: function() {
    window.scrollTo(0,0);
  },  
  
  render: function() {
    
    
    return (
      <div className="childwidth">
          <div className="row">
            <div className="columns large-6">
              <a href="#/Choices" className="next">&laquo; Back to Choices</a>        
            </div>
  
            <div className="columns large-4">
              <a href="#/Basics" className="next">&laquo; Basics</a>
              <a href="#javascript:'"><b><i>Process</i></b></a>
              <a href="#/Products" className="next">&raquo; Products</a>
            </div>          
        </div>
        
        <h3 className="sub-title">The Process</h3>
        <ol>
          <li>
          <b>Consultation with client to determine requirements and goals:</b><br/>
            Energy is not "one-size-fits-all."  Deregulated markets provide consumers with options and decisions, and we work alongside you to determine the best alternatives.
          </li>
          <li>
          <b>Request historical usage and rates:</b><br/>
            A letter of authorization allows us to request detailed historical usage data from the local utilities.  Historical rates may be provided by the utility in certain markets, or based on previous bill copies in others.
          </li>
          <li>
          <b>Negotiate bids with suppliers based on strategy:</b><br/>
            Based on the goals of the client, LD Energy will negotiate rates with the best suppliers.  We bring over 20 years of experience, relationships, and expertise to the table.
          </li>
          <li>
          <b>Execute the best course of action:</b><br/>
            After finalizing a procurement strategy, we work with the client to execute the appropriate transactions in order to ensure the realization of the specific goals.
          </li>
          <li>
          <b>Adapt to changing requirements and markets:</b><br/>
            Over time, the energy markets and clients' goals always evolve.  We work hard to ensure our clients are constantly aware of market changes and market opportunities.
          </li>
        </ol>

      </div>
    );
    
  }
  
});

module.exports = Process;