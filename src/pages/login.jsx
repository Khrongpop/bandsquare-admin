import React , {useState , useEffect } from 'react';
import { Form, Icon, Input, Button, Card ,Layout} from 'antd';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { authentication } from '../actions'
const {  Content } = Layout;
const Login = ({history,dispatch,isLogin,auth}) => {

    const  handleSubmit = (e) => {
        console.log(`user`,user);
        let parm = new FormData()
        parm.append("name", user.name);
        parm.append("password", user.password);
        // dispatch(login(parm,dispatch))
        // dispatch(authentication(parm))
        authentication(parm,dispatch)
    }

    const [user, setValues] = useState({ 
        name: '',
        password: '' 
    });

    
    useEffect(() => {
        console.log(`isLogin`,isLogin)
        if(isLogin) {
            history.push('/dashboard');
        }

        console.log(`auth`,auth)

    });

    const updateField = e => {
        setValues({
          ...user,
          [e.target.name]: e.target.value
        });
      };


    return (
        <Layout style={{height:"100vh" , padding: '25vh 0'}}>
            <Content> 
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
      isLogin: localStorage.getItem("user") ? true : false,
      auth: state.authentication,
      counter: state.counters || 0
    }
  }
const App = connect(mapStateToProps)(Login)

export default withRouter(App)