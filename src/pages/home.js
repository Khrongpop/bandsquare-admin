

import React from 'react'
import { Counter } from '../components/Counter.js'
import { Toggle } from '../components/Toggle.jsx'


export const Home = () => (
  <div className="container">
    <Counter message="Home"/>
    <Toggle/>
  </div>
)

