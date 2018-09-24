import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import PropsTypes from 'prop-types'

function average (data) {
  return _.round(_.sum(data) / data.length)
}

export default function Chart (props) {
  const {
    data,
    color,
    height,
    width,
    type,
    units } = props

  return (
    <div>
      <Sparklines height={height} width={width} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type={type} />
      </Sparklines>
      <div>
        {average(props.data)} {units}
      </div>
    </div>
  )
}

Chart.propTypes = {
  data: PropsTypes.array.isRequired,
}

Chart.defaultProps = {
  color: 'black',
  height: 100,
  width: 180,
  type: 'mean',
}
