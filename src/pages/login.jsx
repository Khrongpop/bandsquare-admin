import React , {useState } from 'react';
import { Form, Icon, Input, Button, Card ,Layout} from 'antd';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { login } from '../actions'
const {  Content } = Layout;
const Login = ({history,isLogin,counter,dispatch}) => {

    const  handleSubmit = (e) => {
        console.log(`user`,user);
        dispatch(login(user))
    }

    const [user, setValues] = useState({ 
        name: '',
        password: '' 
    });

    const updateField = e => {
        setValues({
          ...user,
          [e.target.name]: e.target.value
        });
      };

    
    const clickCount = () => {
        history.push('/users');
    }

    return (
        <Layout style={{height:"100vh" , padding: '25vh 0'}}>
            <Content>  {isLogin}
                <center>
                    <Card style={{ width: 450 }} title="BandSquare Admin">
                        <form  className="login-form" onSubmit={handleSubmit}>
                        
                            <Form.Item>
                                <Input prefix={<Icon type="user"  style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" 
                                    value={user.name} onChange={updateField} name="name" />
                                
                            </Form.Item>

                            <Form.Item>
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"  name="password" onChange={updateField} />
                            </Form.Item>

                            <Form.Item>
                            
                                <Button type="primary"  className="login-form-button" onClick={handleSubmit}>
                                    Log in
                                </Button>
                        
                            </Form.Item>
                        </form>
                    </Card>
                </center>
            </Content>
        </Layout>
    )
    
}

const mapStateToProps =  (state) => {
    return {
      message: 'This is message from mapStateToProps',
      isLogin: state.authentication || `false`,
      counter: state.counters || 0
    }
  }
const App = connect(mapStateToProps)(Login)

export default withRouter(App)