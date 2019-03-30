import React   from 'react'
import { Layout, } from 'antd';
import NavBar  from '../components/Nav'
import LeftNav  from '../components/LeftNav'
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const { Content } = Layout;
  

const App =  ({children}) => {


    return (
        
        <Layout>
            <LeftNav/>
            <Layout>
            <NavBar/>
            <Content style={{
                margin: '24px 16px', minHeight: 800,
            }}
            >
                {children}
            </Content>
            </Layout>
        </Layout>
    )
  }

  export default withRouter(App)

  
  
  