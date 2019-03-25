

import React from 'react'
// import { Counter } from '../components/Counter.js'
import Layout from '../layouts/default'
import NumberCard from '../components/DashboradCard'
import {Col} from 'antd'


 const App = () => (
  <Layout >
  <Col lg={6} md={12}>
    <NumberCard icon="user" title="ผู้ใช้งานทั้งหมด" number="2000" countUp="0" />
  </Col>
  <Col lg={6} md={12}>
    <NumberCard icon="dashboard" title="นักดนตรี" number="700" countUp="0"/>
  </Col>
  <Col lg={6} md={12}>
    <NumberCard icon="dashboard" title="งานที่เสร็จสิ้น" number="200" countUp="0"/>
  </Col>

  <Col lg={6} md={12}>
    <NumberCard icon="dashboard" title="งานที่กำลังทำ" number="200" countUp="0"/>
  </Col>

    {/* <Counter message="Home"/> */}
  </Layout>
)

export default App
