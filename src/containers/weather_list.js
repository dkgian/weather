import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import _ from 'lodash'

import Chart from '../components/chart'

import '../../src/App.css'

class WeatherList extends Component {
  renderWeather (cityData) {
    const { name } = cityData.city
    const temps = _.map(cityData.list.map(weather => weather.main.temp), temps => temps - 273)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)

    console.log(temps)
    return (
      <tr key={name}>
        <td> {name} </td>
        <td>
          <Chart data={temps} color='red' units='*C' />
        </td>
        <td>
          <Chart data={pressure} color='green' units='hPa' />
        </td>
        <td>
          <Chart data={humidity} color='blue' units='%'/>
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps, null)(WeatherList)
