var React = require('react');

var InputField = React.createClass({
  getInitialState() {
    return { value: '' }
  },

  handleChange(event) {
    this.setState( {value: event.target.value} )
  },

  handleBlur(event) {

  },

  handleFocus(event) {

  },

  getValue() {
    return this.state.value;
  },

  render() {
    return (
      <div className="control-group">
        <input type={ this.props.type || 'text' }
               name={ this.props.name }
               value={ this.getValue() }
               onChange={ this.handleChange }
               onBlur={ this.handleBlur }
               onFocus={ this.handleFocus }
               autoComplete={ this.props.autocomplete || 'off' }
               placeholder={ this.props.placeholder || '' }
               className='control' />
        <label htmlFor={this.props.name} className="control-label">
          {this.props.title}
        </label>
      </div>
    );
  }
});

module.exports = InputField;
