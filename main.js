var React = require('react');
var ReactDOM = require('react-dom');

var NinjaGold = React.createClass({
  getInitialState: function() {
    return {
      gold: 0,
      msgarr: []
    }
  },

  handleFarmButtonClick(event) {
    event.preventDefault();
    console.log('farm button clicked');

    this.setState({gold: this.state.gold + 15});
    var a = new Date();
    a = a.toJSON();
    this.state.msgarr.push(<li key={this.state.msgarr.length}>Eared 15 golds from Farm! {a} </li>)    
    // update information
  },

  handleCaveButtonClick(event) {
    event.preventDefault();
    console.log('cave button clicked');

    var a = new Date();
    a = a.toJSON();
    this.setState({gold: this.state.gold + 7});

    this.state.msgarr.push(<li key={this.state.msgarr.length}>Eared 7 golds from Cave! {a} </li>)    
    // update information
  },

  handleHouseButtonClick(event) {
    event.preventDefault();
    console.log('house button clicked');

    this.setState({gold: this.state.gold + 3});
    var a = new Date();
    a = a.toJSON();
    this.state.msgarr.push(<li key={this.state.msgarr.length}>Eared 3 golds from House! {a} </li>)    
    // update information
  },   

  handleCasinoButtonClick(event) {
    event.preventDefault();
    console.log('casino button clicked');

    this.setState({gold: this.state.gold + 25});
    var a = new Date();
    a = a.toJSON();
    this.state.msgarr.push(<li key={this.state.msgarr.length}>Eared 25 golds from Casino! {a} </li>)    
    // update information
  },

  render: function() {
    return (
      <div>
        <div>Your gold: {this.state.gold}</div>
        <div className="sub">
          <h3>Farm</h3>
          <p>(earns 10-20 golds)</p>
          <p><button onClick={this.handleFarmButtonClick}>Find Gold!</button></p>
        </div>

        <div className="sub">
          <h3>Cave</h3>
          <p>(earns 5-10 golds)</p>
          <p><button onClick={this.handleCaveButtonClick}>Find Gold!</button></p>
        </div>

        <div className="sub">
          <h3>House</h3>
          <p>(earns 2-5 golds)</p>
          <p><button onClick={this.handleHouseButtonClick}>Find Gold!</button></p>
        </div>

        <div className="sub">
          <h3>Casino</h3>
          <p>(earns/takes 0-50 golds)</p>
          <p><button onClick={this.handleCasinoButtonClick}>Find Gold!</button></p>
        </div>

        <div>
          <h3>Activities</h3>
        </div>
        <div className="activities">
          <ul>
            {this.state.msgarr}
          </ul>
        </div>
      </div>
    )
  }
})

var App = React.createClass({
  render: function(){
    return (
      <NinjaGold />
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));