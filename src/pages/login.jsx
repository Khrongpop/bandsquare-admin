import React , {useState} from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import 'antd/dist/antd.css';

const Login = () => {
    const  handleSubmit = (e) => {
        // e.preventDefault();
        // props.form.validateFields((err, values) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //   }
        // });
        console.log(`user`,user);
    }
    const [user, setValues] = useState({ 
        name: '',
        pass: '' 
    });
    const updateField = e => {
        setValues({
          ...user,
          [e.target.name]: e.target.value
        });
      };

    return (
        <Card style={{ width: 450 }} title="BandSquare Admin">
            <form  className="login-form" onSubmit={handleSubmit}>
            
                <Form.Item>
                    <Input prefix={<Icon type="user"  style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" 
                          value={user.name} onChange={updateField} name="name" />
                    
                </Form.Item>

                <Form.Item>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"  name="pass" onChange={updateField} />
                </Form.Item>

                <Form.Item>
                
                    <Button type="primary"  className="login-form-button" onClick={handleSubmit}>
                        Log in
                    </Button>
               
                </Form.Item>
            </form>
        </Card>
    )
    
}

export default Login;