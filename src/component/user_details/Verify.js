import React, { useEffect, useState } from 'react'
import Header from '../../components/home/Header'
import { Button } from 'antd'
import AppFooter from '../../components/home/AppFooter'
import { useSearchParams } from 'react-router-dom'
import { async } from 'q'
import axios from 'axios'

function Verify() {
    const [params, setParams] = useSearchParams()
    const [email, setEmail] = useState(params.get("email"))
    const [token, setToken] = useState(params.get("token"))
    const [verify, setVerify] = useState(false)

    useEffect(() => {
        fecthData()
    }, [])

    const fecthData = async () => {
        var res = await axios.post("https://localhost:7113/api/auth/verify?email=" + email + "&token=" + token)
        // console.log(res?.data?.code)
        if (res?.data?.code == 200) setVerify(true)
    }
    return (
        <div className='main-verify'>
            <div className='header'>
                <Header />
            </div>
            <div className='main' style={{textAlign:"center"}}>
                {
                    !verify ? <span>Wait a secons</span>
                        :
                        <>
                            <span>Your email is verify!</span>
                            <a href='/my' >Truy cập website</a>
                        </>
                }
            </div>
            <div className='footer'>
                <AppFooter />
            </div>
        </div>
    )
}

export default Verify