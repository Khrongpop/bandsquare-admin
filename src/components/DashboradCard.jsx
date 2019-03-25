import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd'
import CountUp from 'react-countup'
// import styles from './numberCard.less'

const NumberCard = ({ icon, color, title, number, countUp }) => {
  return (
    <Card
     
      bordered={false}
      bodyStyle={{ padding: 10 }}
    >
      <Icon style={ color } type={icon} />
      <div >
        <p >{title || 'No Title'}</p>
        <p >
          <CountUp
            start={0}
            end={number}
            duration={1.75}
            useEasing
            useGrouping
            separator=","
            {...countUp || {}}
          />
        </p>
      </div>
    </Card>
  )
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard
