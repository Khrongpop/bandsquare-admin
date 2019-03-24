
import React ,{Fragment} from 'react'
// import {  NavLink } from 'react-router-dom'
import { Layout , Menu , Avatar  } from 'antd';
// import { Menu, Icon, Layout, Avatar, Popover, Badge, List } from 'antd'

const { Header } = Layout;
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