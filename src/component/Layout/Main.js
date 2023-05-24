import React from 'react'
import Header from '../../components/home/Header'
import AppFooter from '../../components/home/AppFooter'
import { Content } from 'antd/es/layout/layout'

function Main({ children }) {
    return (
        <div className='main'>
            <div className='navbar'>
                <Header />
            </div>
            <div className='content'>
                <Content> {children}</Content>
                
            </div>
            <div className='footer'>
                <AppFooter />
            </div>
        </div>
    )
}

export default Main