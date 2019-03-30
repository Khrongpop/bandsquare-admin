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
        <p style= {titleStype}>{title || 'No Title'}</p> <br/><br/>
        <p style= {numStype}>
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
const titleStype = {
 
  paddingLeft : '10px',
  paddingTop : '5px',
  fontSize: 15,
  fontFamily: 'Kanit',
  float:'left'
}

const numStype = {
 
  paddingLeft : '10px',
  fontSize: 30,
  fontFamily: 'Kanit',
  lineHeight: '.3',
  float:'left'
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard
