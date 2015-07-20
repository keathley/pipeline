import React from 'react'
import ajax from 'reqwest'

require('styles/components/talks.css')

const URL = `http://chadevapi.herokuapp.com/lunches`

const Talks = React.createClass({
  getInitialState() {
    return { lunches: [] }
  },

  componentDidMount() {
    ajax({
      method: 'GET',
      url: URL,
      crossOrigin: true,
      success: this.handleSuccess,
      error: this.handeError
    })
  },

  handleSuccess(resp) {
    this.setState({ lunches: resp })
  },

  handleError(resp) {
    console.error(resp)
  },

  daysTill() {
    var today         = new Date()
      , thursday      = 4
      , day           = today.getDay()
      , date          = today.getDate()
      , daysTillThurs = (thursday - day)
      , daysTill      = daysTillThurs + 7
      , nextThursday  = date + daysTillThurs
      , dates         = this.state.lunches.map( lunch => new Date(lunch.time) )

    if (dates[0] && nextThursday != dates[0].getDate())
      return daysTillThurs

    var gaps = dates.map( (lunch, i, arr) => {
      if (i == (arr.length - 1))
        return false

      var now = lunch.getTime()
        , next = arr[i+1].getTime()
        , diff = Math.abs( next - now )
        , days = Math.ceil( diff / (1000 * 3600 * 24) )

      return days <= 8
    })

    for(var i = 0; i < gaps.length; i++) {
      if (!gaps[i])
        break

      daysTill += 7
    }

    return daysTill
  },

  render() {
    var daysTill = this.daysTill()

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
         days to find a speaker
        </h2>
      </div>
    )
  }
})

export default Talks
