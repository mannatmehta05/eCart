import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import axios from "axios"
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Common/HelperApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
     console.log(baseUrl)
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
               const result = await axios.post(`${baseUrl}user/login`, input)
               console.log(result)
               localStorage.setItem("accessToken", result.data.data.accessToken);
               navigate("/dashboard")
          }
          catch (e) {
               toast.error(e.response.data.message)
               console.log(e)
          }
          // setState(input)
     }
     return <>
          <div className='section'>
               <Form className='Form'
                    style={{
                         maxWidth: formLayout === 'inline' ? 'none' : 600,backgroundColor:"#fff"
                    }}
               >
                    <h2>LOG IN</h2>
                    <Form.Item label="Username">
                         <Input placeholder="Enter your username" onChange={handle} name='email' />
                    </Form.Item>
                    <Form.Item label="Password">
                         <Input placeholder="Enter your password" type='password' onChange={handle} name='password' className='input' />
                    </Form.Item>
                    <div className='btn'>
                         <Link className='link' onClick={() => navigate("/sign")} >Click here to SignUp</Link>
                         <Button type="primary" onClick={handleClick}>Submit</Button>
                    </div>
               </Form>
          </div>
          <ToastContainer />
     </>
}
export default Login