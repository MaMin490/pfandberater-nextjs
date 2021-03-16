import React from 'react'
import 'antd/dist/antd.css';


import { Layout, Menu } from 'antd';

const { Header } = Layout

export default function Head() {

    return (
        <>
            <Layout className="layout">
                <Header>                    
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Login</Menu.Item>
                        <Menu.Item key="3">Logout</Menu.Item>
                    </Menu>
                </Header>                       
            </Layout>
            ,
        </>
    )
}
