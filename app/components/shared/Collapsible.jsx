var React = require('react')
  , PropTypes = React.PropTypes
  , classNames = require('classnames')

var Collapsible = React.createClass({
  propTypes: {
      icon: PropTypes.string
    , title: PropTypes.string.isRequired
    , children: PropTypes.any.isRequired
  },

  getDefaultProps() {
    return { icon: '' }
  },

  getInitialState() {
    return { collapsed: true }
  },

  handleClick(event) {
    this.setState({ collapsed: !this.state.collapsed })
  },

  render() {
    let classes = classNames(
      'collapsible',
      { 'open': !this.state.collapsed }
    )
    return (
      <div className={ classes }>
        <button className="collapsible-header" onClick={ this.handleClick }>
          <i className={ this.props.icon } />
          {this.props.title}
        </button>
        <div className="collapsible-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});


module.exports = Collapsible;
