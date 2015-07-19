var React = require('react')
  , Router = require('react-router');

var App = require('./components/App')
  , Talks = require('./components/talks/Index')

require('./styles/index.scss');

React.initializeTouchEvents(true);

var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.DefaultRoute handler={Talks} />
  </Router.Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.body);
});
