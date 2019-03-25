

import React from 'react'
import { Counter } from '../components/Counter.js'
import { Toggle } from '../components/Toggle.jsx'
import Layout from '../layouts/default'

 const App = () => (
  <Layout >
    <Counter message="Home"/>
    <Toggle/>
  </Layout>
)

export default App
