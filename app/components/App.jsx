var React = require('react')
  , Router = require('react-router')

var Header   = require('shared/Header')
  , LeadForm = require('talks/LeadForm')

var App = React.createClass({
  render() {
    return (
      <main className="app">
        <Header />
        <LeadForm />
        <Router.RouteHandler {...this.props} />
      </main>
    );
  }
});

module.exports = App;
