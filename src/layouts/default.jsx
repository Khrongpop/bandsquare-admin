import React  from 'react'
import { Layout, } from 'antd';

import { NavBar , LeftNav} from '../components/Nav'
import 'antd/dist/antd.css';

const { Content } = Layout;
  

export default  (props) => {

    
    return (
        
        <Layout>
            <LeftNav/>
            <Layout>
            <NavBar/>
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
  
  