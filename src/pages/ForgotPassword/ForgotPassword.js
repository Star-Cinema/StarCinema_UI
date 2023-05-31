import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './ForgotPassword.css'
import axios from 'axios'
import { notification } from 'antd'

//Request forgot password HungTD34
function ForgotPassword() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState()
    const [show, setShow] = useState(false)
    const [api, contextHolder1] = notification.useNotification();

    const [username, setUsername] = useState('')

    //Check validation form HungTD34
    const validate = () => {
        const error = {}
        if (username == '') error.username = 'Email không được để trống!'
        // const re = /\S+@\S+\.\S+/;
        const re = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!re.test(String(username).toLowerCase())) error.username = 'Email sai địng dạng!'

        setErrors(error)
        return Object.keys(error).length === 0;
    }

    //Request API to recieve new pasword HungTD34
    const handleForgot = async () => {
        // const user = {
        //     email: username,
        // }
        console.log(username)

        if (validate()) {
            try {
                var rs = await axios.get("https://localhost:7113/api/auth/forgot?email=" + username)
                if (rs?.data?.code == 200) {
                    alert("Check your email to get new password")
                    window.location = '/login'
                }
            } catch (e) {
                const error = {}
                error.username = "Email không tồn tại"
                setErrors(error)
            }
        }
    }
    return (

        <div className='main-forgot-password'>
            <div className='forgot-password-header'>QUÊN MẬT KHẨU</div>
            <div className='forgot-password-main'>
                <div className='input-form'>
                    <input type='text' placeholder='Email' onChange={(e) => setUsername(e.target.value)}></input>
                    {
                        errors?.username ? <span className='error-validate'>{errors.username}</span>
                            : <span className='error-validate'></span>
                    }
                </div>
            </div>
            <div className='forgot-password-footer'>
                <div className='forgot-password'>
                    <button className='btn-forgot-password' onClick={handleForgot}>Xác nhận</button>
                </div>
                <div className='register'>
                    <button className='btn-register' onClick={() => navigate('/login')}>Quay lại đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword