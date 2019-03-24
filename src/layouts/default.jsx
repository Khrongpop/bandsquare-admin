import React ,{Fragment} from 'react'
import { Layout, Menu, Icon ,Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu
  


export default  (props) => {

    const handleClickMenu = (item, key, keyPath) => {
        console.log(`item`,item);
        console.log(`key`,key);
        console.log(`keyPath`,keyPath);
        // Link.push({
        //     pathname: key,
        //     // query: { name: name }
        //   })
      }

      const avatar = `https://randomuser.me/api/portraits/women/68.jpg`
    
    return (
        
        <Layout>
            <Sider
            trigger={null}
            collapsible
            collapsed={false}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClickMenu}>
               
              <Menu.Item key="/user" >
                    <Icon type="user" />
                    <span>User</span>
              </Menu.Item>

              <Menu.Item key="/video">
                <Icon type="video-camera" />
                <span>video </span>
              </Menu.Item>
              <Menu.Item key="/upload">
                <Icon type="upload" />
                <span>upload </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Menu key="user" mode="horizontal"  style={{ float: "right"}}>
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
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
          {props.children}
          </Content>
        </Layout>
        </Layout>
    )
  }
  
  