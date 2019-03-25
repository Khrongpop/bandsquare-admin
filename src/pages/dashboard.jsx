

import React from 'react'
import Layout from '../layouts/default'
import NumberCard from '../components/DashboradCard'
import {Col} from 'antd'

const dataSoure = [
  {
    icon:"user",
    title:"ผู้ใช้งานทั้งหมด",
    number:"2000",
    color:{color : 'red'}
  },
  {
    icon:"idcard",
    title:"นักดนตรี",
    number:"700",
    color:{color : 'red'}
  },
  {
    icon:"file-done",
    title:"งานที่เสร็จสิ้น",
    number:"2500",
    color:{color : 'red'}
  },
  {
    icon:"file-sync",
    title:"งานที่กำลังทำ",
    number:"4000",
    color:{color : 'red'}
  }
]



 const App = () => (
  <Layout>
    <div style={{padding: 24}}>
      {
        dataSoure.map((item, key) => 
          <Col  key={key} lg={6} md={12}>
          <NumberCard icon={item.icon} title={item.title} number={item.number}  color ={item.color}/>
          </Col>
        )
      }
    </div>
  </Layout>
)

export default App
