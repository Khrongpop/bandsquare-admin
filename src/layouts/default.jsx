import React ,{useEffect}  from 'react'
import { Layout, } from 'antd';
import NavBar , {LeftNav} from '../components/Nav'
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const { Content } = Layout;
  

const App =  ({children,history}) => {

    useEffect(() => {
        let isLogin = localStorage.getItem("user") ? true : false

        console.log(`isLogin`,isLogin)
        if(!isLogin) {
            history.push('/');
        }

    });

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

  
  
  