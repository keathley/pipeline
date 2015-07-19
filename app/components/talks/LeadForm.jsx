var React = require('react')

var InputField  = require('shared/InputField')

var LeadForm = React.createClass({

  getInitialState() {
    return { value: '' }
  },

  handleChange(event) {
    this.setState( {value: event.target.value} )
  },

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  },

  render() {
    var name = this.state.name

    return (
      <div className='lead-card'>
        <form className="lead-form" onSubmit={ this.handleSubmit }>
          <input type="text"
            className='control'
            name="title"
            placeholder='What should we talk about?'/>
        </form>
      </div>
    );
  }
});

module.exports = LeadForm;
