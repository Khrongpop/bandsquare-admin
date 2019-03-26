

import React , {useState,useEffect} from 'react'
import { Layout , Menu  , Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
const { Sider } = Layout;
const logo_w = 'https://firebasestorage.googleapis.com/v0/b/thesis-4ef45.appspot.com/o/image%2Fusers%2Flogo_tran.png?alt=media&token=e8742ea6-f159-4a9a-9980-af85f0f18b91'
// const logo_color = 'https://firebasestorage.googleapis.com/v0/b/thesis-4ef45.appspot.com/o/image%2Fusers%2Flogo_full.png?alt=media&token=14d31cdb-cbd8-4528-a51a-13f9cca6259c'

 const LeftNav = ({location}) => {
    const style = {
      widht: 100 ,
      height: 60,
      marginBottom: 23
    }
    const style_logo = {
      widht: 50 ,
      height: 50,
      marginTop: 5,
    }

    const [active, setActive] = useState('0');

    useEffect(()=>{
      let newActive = dataSoure.findIndex((link) => link.path === location.pathname)
      setActive(`${newActive}`)
    },[])

    return (
      
      <Sider
      trigger={null}
      collapsible
      collapsed={false}> 
          <div style={{position:"fixed",width:200}}> 
              <div className="logo" style={style}> 
                  <center>
                    <img src={logo_w} alt=""  style={style_logo}/>
                  </center>
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={[active]} selectedKeys={[active]}>
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

// export default LeftNav
export default withRouter(LeftNav)