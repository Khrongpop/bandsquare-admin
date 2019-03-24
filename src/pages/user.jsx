

import React , {useEffect , useReducer} from 'react'
import Layout from '../layouts/default'
import { Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { fetchUsers } from '../actions'

const fetchusers = () => axios.post('https://muangthesisapi.herokuapp.com/admin/get_user');

const initialState = {
  isFetching: false,
  cat: {},
  count: 0
}

const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'FETCH_USER':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        isFetching: false,
        users: payload
      }
    default:
      return state
  }
}


export const App =  ({dispatch,users}) => {  

  // const [{ users, isFetching }, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    console.log(`user page`)
    fetchUsers(dispatch)
  //   fetchUsers(dispatch).then(response => { 
  //     dispatch({
  //       type: 'FETCH_USER_SUCCESS',
  //       payload: response.data
  //     })
  //   })
  },[])

  return (
    <Layout>
        {users}
        {/*  <Table dataSource={dataSource} columns={columns} /> */}
    </Layout>
  )
}
const mapStateToProps =  (state) => {
  return {
    isLogin: localStorage.getItem("user") ? true : false,
    users: state.users || ``,
  }
}
const AppConnect = connect(mapStateToProps)(App)
export default withRouter(AppConnect)

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <span>{text}</span>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
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

const dataSource = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

