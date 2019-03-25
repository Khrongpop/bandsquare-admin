
import React ,{Fragment} from 'react'
import { Layout , Menu , Avatar , Icon } from 'antd';
import {  NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const { Header , Sider} = Layout;
const { SubMenu } = Menu


const logo_w = 'https://firebasestorage.googleapis.com/v0/b/thesis-4ef45.appspot.com/o/image%2Fusers%2Flogo_tran.png?alt=media&token=e8742ea6-f159-4a9a-9980-af85f0f18b91'
// const logo_color = 'https://firebasestorage.googleapis.com/v0/b/thesis-4ef45.appspot.com/o/image%2Fusers%2Flogo_full.png?alt=media&token=14d31cdb-cbd8-4528-a51a-13f9cca6259c'

export const NavBar = ({history,currentUser}) =>  {
  const  logout = () => {
     localStorage.removeItem("user")
     history.push('/')
  }
  return(
    <Header style={{ background: '#fff', padding: 0 }}>

        <Menu key="user" mode="horizontal" onClick={logout} style={{ float: "right"}}>
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
          <Menu.Item key="SignOut">
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
    isLogin: localStorage.getItem("user") ? true : false,
    auth: state.authentication,
    currentUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  }
}
const AppNavBar = connect(mapStateToProps)(NavBar)
export  default withRouter(AppNavBar)

export const LeftNav = () => {
    const style ={
      widht: 100 ,
      height: 60,
      marginBottom: 23
    }
    const style_logo = {
      widht: 50 ,
      height: 50,
      marginTop: 5,
    }
    return (
      <Sider
      trigger={null}
      collapsible
      collapsed={false}
    > <div style={{position:"fixed",width:200}}> 
        <div className="logo" style={style}> 
            <center>
               <img src={logo_w} alt=""  style={style_logo}/>
            </center>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
         {dataSoure.map((item,index)=>
            <Menu.Item key={index}>
              <NavLink exact to={item.path} >
                <Icon type={item.icon} />
                <span> {item.title} </span>
              </NavLink>
            </Menu.Item>
          )}
        </Menu>
        </div>
    </Sider>
  )
}
const dataSoure = [
  {
    path: "/dashboard",
    icon: "dashboard",
    title: "Dashboard",
  },
  {
    path: "/users",
    icon: "user",
    title: "User",
  },
  {
    path: "/work",
    icon: "video-camera",
    title: "Work",
  },
  
]