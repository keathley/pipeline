var React = require('react')

var InputField  = require('shared/InputField')
  , Collapsible = require('shared/Collapsible')
  , Body        = Collapsible.Body
  , Header      = Collapsible.Header

var LeadForm = React.createClass({
  getInitialState() {
    return { value: '' }
  }
  , handleChange(event) {
    this.setState( {value: event.target.value} )
  }
  , handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  , render() {
    let name = this.state.name
    return (
      <Collapsible title="Add a new lead">
        <form className="lead-form" onSubmit={ this.handleSubmit }>
          <InputField type="text"
                      name="speaker"
                      title="Speaker Name"
                      value={ name }
                      placeholder="Who is speaking" />
        </form>
      </Collapsible>
    );
  }
});

module.exports = LeadForm;
