
import React ,{Fragment} from 'react'
import { Layout , Menu ,Avatar  } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Auth } from '../routers'
const { Header } = Layout;
const { SubMenu } = Menu


export const NavBar = ({history,currentUser}) =>  {
  const  logout = () => {
     Auth.isLogin = false
     localStorage.removeItem("adminBSuser")
     history.push('/')
  }

  return(
    <Header style={{ background: '#fff', padding: 0 }}>

        <Menu key="user" mode="horizontal"  style={{ float: "right"}}>
        <SubMenu
          title={
            <Fragment>
              <span style={{ color: '#999', marginRight: 4 }}>
                <span>Hi,</span>
              </span>
              <span>{currentUser.name}</span>
              <Avatar style={{ marginLeft: 8 }} src={currentUser.image} />
            </Fragment>
          }
        >
          <Menu.Item key="SignOut" onClick={logout}>
            <span >Sign out</span>
          </Menu.Item>
        </SubMenu>
      </Menu>

    </Header>
  )
}
const mapStateToProps =  (state) => {
  return {
    message: 'This is message from mapStateToProps',
    isLogin: localStorage.getItem("adminBSuser") ? true : false,
    auth: state.authentication,
    currentUser: localStorage.getItem("adminBSuser") ? JSON.parse(localStorage.getItem("adminBSuser")) : null
   
  }
}
const AppNavBar = connect(mapStateToProps)(NavBar)
export  default withRouter(AppNavBar)
