var React = require('react')
  , Router = require('react-router')

import App from 'components/App'
import Talks from 'components/Talks'

require('./styles/index.css')

var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.DefaultRoute handler={ Talks } />
  </Router.Route>
)

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body)
})
