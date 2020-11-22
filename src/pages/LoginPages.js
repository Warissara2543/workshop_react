import React from 'react'
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import bg from './assets/picture.jpg';

const StyledWrapper = styled.div`
        background-image: url('${bg}');
        background-size: 100%;
        /* background-color:orange; */
        min-height: 100vh;
        display: flex;
        /* แกนหลัก */
        justify-content:center;
        align-items:center;

        .form-card{
            padding:30px;
            border-radius:8px;
            max-width: 600px;
            background-color:white;
        }

        .form-card h1{
            text-align:center;
            font-weight:bold;
        }
`

function LoginPages() {

    const history = useHistory();

    const onFinish = values => {
        console.log('Received values of form: ', values);

        history.push('/');
    };

    return (
        <StyledWrapper>
            <div className="form-card">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <h1>Keep It</h1>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in 
                        </Button>
                        Or <Link to='/Register'>register now!</Link>
                    </Form.Item>
                </Form>
            </div>
        </StyledWrapper>
    )
}

export default LoginPages
