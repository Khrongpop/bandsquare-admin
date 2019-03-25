

import React , {useEffect} from 'react'
import Layout from '../layouts/default'
import { Table, Divider, Tag , Avatar} from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchWorks } from '../actions'


const style = `
  img { object-fit: cover; }
`

export const App =  ({dispatch,works,isLogin,history}) => {  

  
  useEffect(() => {

    if(!isLogin) {
        history.push('/');
      }

    if (works.length === 0){
      fetchWorks(dispatch)
    }
  })

  return (
    <Layout >
      <div style={{padding: 24, background: '#fff'}}>
      <style jsx="true">{style}</style>
       <Table dataSource={works} columns={columns} bordered/>
        {/*  <Table dataSource={users} columns={columns} bordered/> */}
      </div>
    </Layout>
  )
}

const mapStateToProps =  (state) => {
  return {
    isLogin: localStorage.getItem("user") ? true : false,
    works: state.works || [],
  }
}

const AppConnect = connect(mapStateToProps)(App)
export default withRouter(AppConnect)

const columns = [
{
    title: 'ไอดี',
    dataIndex: 'id',
    id: 'id',
    render: text => <span>{text*7531}</span>,
},
{
    title: 'ผู้จ้าง',
    key: 'user.name',
    render: item =>  ( 
      <span>
        <Avatar size="medium" src={item.user.image}></Avatar>
        <span>{item.user.name}</span>
      </span>
    ),
  }, 
  {
    title: 'วงดนตรี',
    key: 'band.user.name',
    render: item =>  ( 
      getBandinfo(item)
    ),
  },
{
    title: 'สถานที่',
    key: 'location',
    render: work => (
       <a  target="_blank" href={getURL(work)} >
            {work.location}
       </a>
    ),
},
{
    title: 'วันเวลา',
    key: 'date_time',
    render: work => (
          <span> {getDateTime(work)}</span>
      ),
},
 {
  title: 'ประเภทงาน',
  key: 'category_id',
  dataIndex: 'category_id',
  render: category_id => (
    <span>
      <Tag color={getCategoryColor(category_id)} >{getCategoryTitle(category_id)}</Tag>
    </span>
  ),
}, {
  title: 'ประเภทดนตรี',
  key: 'type_id',
  dataIndex: 'type_id',
  render: type_id => (
    <span>
      <Tag color={getTypeColor(type_id)} >{getTypeTitle(type_id)}</Tag>
    </span>
  ),
}];

const getBandinfo = (parm) => {
    if(parm.band) {
        return <span>
            <Avatar size="medium" src={parm.band.user.image}></Avatar>
            <span>{parm.band.user.name}</span>
          </span>
    }
    return <span>
        ยังไม่มีวงดนตรี
    </span>
}

const getDateTime = (work) => {
    return work.date
}

const getURL = (parm) => {
    let url = "https://www.google.co.th/maps/search/"
    let splits = parm.location.split(" ")
    splits.forEach(text => {
        url += text+'+'
    });
    url = url + `/@${parm.latitude},${parm.longitude},17z`
    return url
}

const getCategoryColor = (category_id) => {
    if (category_id === 1) {
        return 'magenta'
    } else if (category_id === 2) {
        return 'green'
    } else if (category_id === 2) {
        return 'volcano'
    }  
    return 'blue'
}

const getCategoryTitle = (category_id) => {
    if (category_id === 1) {
        return 'งานแต่งงาน'
    } else if (category_id === 2) {
        return 'อีเว้นท์'
    } else if (category_id === 2) {
        return 'ปาร์ตี้'
    }  
    return 'อื่นๆ'
}

const getTypeColor = (type_id) => {
    if (type_id === 1) {
        return 'red'
    } else if (type_id === 2) {
        return 'purple'
    } else if (type_id === 3) {
        return 'volcano'
    }  else if (type_id === 4) {
        return 'cyan'
    }  
    return 'orange'
}

const getTypeTitle = (type_id) => {
    if (type_id === 1) {
        return 'อะคูสติก'
    } else if (type_id === 2) {
        return 'ฟูลแบนด์'
    } else if (type_id === 3) {
        return 'ดีเจ'
    }  else if (type_id === 4) {
        return 'สตริง'
    }  
    return 'แจส'
}