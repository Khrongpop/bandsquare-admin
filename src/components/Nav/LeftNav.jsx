
import React ,{PureComponent} from 'react'
import {  NavLink ,withRouter} from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd';
const {  Sider } = Layout;

const log = () => {
  console.log(`this.props.location.pathname`);
}


class LeftNav extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
        counter: 0,
        selectKey: '1'
    }

    this.handleClick = this.handleClick.bind(this)
  
  }

  handleClick() {
    this.setState({
        counter: this.state.counter + 1,
        selectKey: `2`
    })
    console.log(this.state.counter);
  }
  

  render() {
      return (
        <Sider
        trigger={null}
        collapsible
        collapsed={false}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.selectKey]}>
          <Menu.Item key="1">
            <NavLink exact to="/users" >
              <Icon type="user" />
              <span>User {this.state.selectKey}</span>
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
    
        <button onClick={this.handleClick}></button>
      </Sider>
      )
  }
}

export default LeftNav