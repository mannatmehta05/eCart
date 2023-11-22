import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Common/HelperApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [state, setState] = useState("")
    console.log("state", state)
    const [input, setInput] = useState({})
    console.log("input", input)
    const navigate = useNavigate()
    const handle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleClick = async () => {
        try {
            const results = await axios.post(`${baseUrl}user/register`, input)
            toast.success(results.data.message)
            navigate("/")
            // setState(input)
        }
        catch (e) {
            console.log(e)
            toast.error(e.response.data.message)
        }
    }
    return <>
        <div className='section'>
            <Form className='Form'
                layout="vertical"
                style={{
                    maxWidth: formLayout === 'inline' ? 'none' : 600, backgroundColor:"#fff"
                }}
            >
                <h2>SIGN UP</h2>
                <Form.Item label="Fullname">
                    <Input placeholder="Enter your username" onChange={handle} name='name' />
                </Form.Item>
                <Form.Item label="E-mail">
                    <Input placeholder="Enter your username" onChange={handle} name='email' />
                </Form.Item>
                <Form.Item label="Username">
                    <Input placeholder="Enter your username" onChange={handle} name='userName' />
                </Form.Item>
                <Form.Item label="Mobile">
                    <Input placeholder="Enter your username" onChange={handle} name='mobile' />
                </Form.Item>
                <Form.Item label="Password">
                    <Input placeholder="Enter your password" type='password' onChange={handle} name='password' className='input' />
                </Form.Item>
                <div className='btn'>
                    <span style={{ marginBottom: "20px" }} > <text className='text'>Already have an account?</text><Link className='link' onClick={() => navigate("/login")} >Log-in</Link></span>
                    {/* <Link className='link' onClick={() => navigate("/")} >Log-in</Link> */}
                    <Button type="primary" onClick={handleClick}>create account</Button>
                </div>
            </Form>
        </div>
        <ToastContainer />
    </>
}
export default SignUp
