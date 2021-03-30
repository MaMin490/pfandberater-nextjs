import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, HomeOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';

import { device } from '../../static/global/media-query';
import { theme } from '../../static/global/colors';

const { Header } = Layout;

const { SubMenu } = Menu;
const { colors } = theme;
const rootSubmenuKeys = ['sub1'];
const fontSize = '1.2rem';

const VisibleLaptop = styled.div`
  visibility: hidden;

  @media ${device.tablet} {
    visibility: visible;
  }
`;

const VisibleMobile = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
  visibility: visible;

  @media ${device.tablet} {
    visibility: hidden;
  }
`;

export default function Head(): JSX.Element {

  const [openKeys, setOpenKeys] = useState<string[]>(['sub1']);

  function onOpenChange(keys: string[]): void {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }

  return (
    <>
      <Header style={{ width: '100%', backgroundColor: colors.black, paddingBottom: '4.6rem' }}>
        <VisibleLaptop style={{ backgroundColor: colors.black }}>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{
              width: '100%',
              backgroundColor: colors.black,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Menu.Item key="1" style={{ backgroundColor: colors.black, flexBasis: '90%' }}>
              <Link href="/">
                <a style={{ fontSize: '1.8rem', color: colors.mint, fontFamily: 'pacifico' }}>Pfandberater.de</a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{ backgroundColor: colors.black, flexBasis: '5%' }}
              icon={<LoginOutlined style={{ fontSize }} />}>
              <Link href="/login">
                <a style={{ fontSize, color: colors.red }} >login</a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ backgroundColor: colors.black, flexBasis: '5%' }}
              icon={<LogoutOutlined style={{ fontSize }} />}>
              <Link href="/logout">
                <a style={{ fontSize, color: colors.red }}>logout</a>
              </Link>
            </Menu.Item>
          </Menu>
        </VisibleLaptop>
        <VisibleMobile style={{ backgroundColor: colors.lightGrey }}>
          <Menu
            mode="inline"
            theme="dark"
            onOpenChange={onOpenChange}
            style={{ width: '100%', backgroundColor: colors.black }}>
            <SubMenu
              style={{
                color: colors.mint,
                fontSize: '1.45rem',
                fontWeight: 550,
                height: '4.0rem',
                fontFamily: 'pacifico',
                marginTop: '0.95rem',
              }}
              title="El Pfandberater"
              key="sub1"
              icon={
                <MenuFoldOutlined
                  style={{
                    fontSize: '1.5rem',
                    color: colors.mint,
                    marginTop: '0.8rem',
                    marginRight: '1.1rem',
                  }}
                />
              }>
              <Menu.Item
                key="1"
                style={{ backgroundColor: colors.lightGrey, margin: '0.8rem 0 0 0', fontSize: '1.3rem' }}
                icon={<HomeOutlined style={{ fontSize: '1.3rem' }} />}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                style={{ backgroundColor: colors.lightGrey, margin: '0', fontSize: '1.3rem' }}
                icon={<LoginOutlined style={{ fontSize: '1.3rem' }} />}>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="3"
                style={{ backgroundColor: colors.lightGrey, margin: '0 0 0.7rem 0', fontSize: '1.3rem' }}
                icon={<LogoutOutlined style={{ fontSize: '1.3rem' }} />}>
                <Link href="/logout">
                  <a>Logout</a>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </VisibleMobile>
      </Header>
    </>
  );
}
