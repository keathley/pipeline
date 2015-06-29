var React = require('react')
  , Router = require('react-router')

var LeadForm = require('talks/Form')

var App = React.createClass({
  render() {
    return (
      <main className="app">
        <LeadForm />
        <Router.RouteHandler {...this.props} />
      </main>
    );
  }
});

module.exports = App;
