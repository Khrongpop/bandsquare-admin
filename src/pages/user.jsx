

import React , {useEffect} from 'react'
import Layout from '../layouts/default'
import { Table, Divider, Tag , Avatar} from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../actions'


const style = `
  img { object-fit: cover; }
`

export const App =  ({dispatch,users}) => {  

  
  useEffect(() => {
    if (users.length === 0){
      fetchUsers(dispatch)
    }
  })

  return (
    <Layout >
      <div style={{padding: 24, background: '#fff'}}>
      <style jsx="true">{style}</style>
       <Table dataSource={users} columns={columns} bordered/> 
       </div>
    </Layout>
  )
}

const mapStateToProps =  (state) => {
  return {
    isLogin: localStorage.getItem("user") ? true : false,
    users: state.users || [],
  }
}

const AppConnect = connect(mapStateToProps)(App)
export default withRouter(AppConnect)

const columns = [
{
    title: 'Image',
    dataIndex: 'image',
    id: 'image',
    render: image => <Avatar size="large" src={image} />,
},
{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <span>{text}</span>,
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: 'Role',
  key: 'role_id',
  dataIndex: 'role_id',
  render: role => (
    <span>
      <Tag color={role === 1 ? 'geekblue' : 'green'} >{role === 1 ? `Member` : `Musicain`}</Tag>
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <span>Invite {record.name}</span>
      <Divider type="vertical" />
      <span >Delete</span>
    </span>
  ),
}];
