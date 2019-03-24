
import React ,{Fragment} from 'react'
import { Layout , Menu , Avatar , Icon } from 'antd';
import {  NavLink } from 'react-router-dom'
const { Header , Sider} = Layout;
const { SubMenu } = Menu

const avatar = `https://randomuser.me/api/portraits/women/68.jpg`

const handleClickMenu = () => {
  console.log(`object`);
}


export const NavBar = () => (
  <Header style={{ background: '#fff', padding: 0 }}>

      
      
      <Menu key="user" mode="horizontal" onClick={handleClickMenu} style={{ float: "right"}}>
      <SubMenu
        title={
          <Fragment>
            <span style={{ color: '#999', marginRight: 4 }}>
              <span>Hi,</span>
            </span>
            <span>muang</span>
            <Avatar style={{ marginLeft: 8 }} src={avatar} />
          </Fragment>
        }
      >
        <Menu.Item key="SignOut">
          <span>Sign out</span>
        </Menu.Item>
      </SubMenu>
    </Menu>

  </Header>
)


export const LeftNav = () => {
  
    return (
      <Sider
      trigger={null}
      collapsible
      collapsed={false}
    >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <NavLink exact to="/users" >
              <Icon type="user" />
              <span>User </span>
            </NavLink>
          </Menu.Item>
    
          <Menu.Item key="2">
            <NavLink exact to="/about" >
              <Icon type="video-camera" />
              <span>about</span>
            </NavLink>
          </Menu.Item>
    
          <Menu.Item key="3">
            <NavLink exact to="/posts" >
              <Icon type="upload" />
              <span>posts</span>
              </NavLink>
          </Menu.Item>
        </Menu>
    
    </Sider>
  )
}
