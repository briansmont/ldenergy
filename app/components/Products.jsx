var React = require('react');

var Products = React.createClass({

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
            <a href="#/Basics" className="next">&laquo;&laquo; Basics</a>
            <a href="#/Process" className="next">&laquo; Process</a>
            <a href="#javascript:'"><b><i>Products</i></b></a>
          </div>                  
        </div>
        <h3 className="sub-title">Product Options</h3>
        <div className="bordered">
          <div>
            <h4>Fixed Price</h4>
          </div>
          <div className="row margin-bottom">
            <div className="columns small-6 large-6">
              <p>Fixed pricing is a conservative approach to purchasing electricity or natural gas.  With this product, you are promised the commodity at a certain price for an agreed upon length of time. The price is guaranteed regardless of market volatility, with no monthly fluctuations.  <br/><small>Occasionally regulators such as the Board of Public Utilities will approve an adjustment, but this<b> impacts all customers, regardless of who provides the commodity</b>.</small></p>
              <img src="https://s3.us-east-2.amazonaws.com/ldwebsite/graph-fp.jpg"></img>
            </div>
            <div className="columns small-6 large-6">
              <ul id="pros"><b>Pros:</b>
                <li>Hedge against rising market conditions</li>
                <li>Ability to budget and predict costs</li>
              </ul>
              <ul id="cons"><b>Cons:</b>
                <li>Market could trend further downward below contract price over time</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bordered">
          <div>
            <h4>Index Price</h4>
          </div>
          <div className="row margin-bottom">
            <div className="columns small-6 large-6">
              <p>Index pricing is an aggressive approach when purchasing electric or gas. An index product means you are billed for the actual cost of the commodity, with no "risk premium" for a hedge. This can bring you a lower priced product if the index remains low, or can end up costing a fortune more than a fixed price if the index moves upward. There is no stability or hedge against market movement.</p>
              <img src="https://s3.us-east-2.amazonaws.com/ldwebsite/graph-ip.jpg"></img>
            </div>
            <div className="columns small-6 large-6">
              <ul id="pros"><b>Pros:</b>
                <li>No risk premium cost</li>
                <li>Purchase at true cost to supply for power/gas</li>
                <li>Aggressive buying strategy</li>
              </ul>
              <ul id="cons"><b>Cons:</b>
                <li>No protection against upward market movement</li>
                <li>Potential for extreme volatility, straining budget planning</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bordered">
          <div>
            <h4>Combination Approach (Various Advanced Products)</h4>
          </div>
          <div className="row margin-bottom">
            <div className="columns small-6 large-6">
              <p>Combination strategies use fixed and indexed products to achieve a target risk level. Layer partial fixed hedges over time to achieve diversified portfolio and risk goals by season, time-of-day, etc. Modify strategy in response to markets, risk tolerances, etc.</p>
              <img src="https://s3.us-east-2.amazonaws.com/ldwebsite/graph-ca.jpg"></img>
            </div>
            <div className="columns small-6 large-6">
              <ul id="pros"><b>Pros:</b>
                <li>Combine fixed / index pricing to see best of both</li>
                <li>Layer fixed hedges over time to diversity</li>
                <li>Allow for changing risk tolerances over time</li>
                <li>Ability to react and adjust with market movement</li>
              </ul>
              <ul id="cons"><b>Cons:</b>
                <li>Requires minimum annual energy usage of 7,500 mWh - 10,000 mWh</li>
                <li>Potential for additional risk due to index components</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Products;