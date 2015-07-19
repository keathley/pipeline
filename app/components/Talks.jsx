import React from 'react'

require('styles/components/talks.css')

const Talks = React.createClass({
  getInitialState() {
    return { daysTill: 0 }
  },

  render() {
    var daysTill = this.state.daysTill

    return (
      <div className='talks'>
        <h2>
          You have
        </h2>
        <h1 className='days'>
          <span className='arrow'>→</span>
          { daysTill }
          <span className='arrow'>←</span>
        </h1>
        <h2>
         days to find a meetup
        </h2>
      </div>
    )
  }
})

export default Talks
