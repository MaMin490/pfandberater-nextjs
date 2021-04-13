import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { theme } from '../../public/global/colors';

const { colors } = theme;

const ChooseCityContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${colors.menuGrey};
  transform: translate(-50%, 6rem);
`;

export default function ChooseCity(): JSX.Element {
  const menu = (
    <Menu style={{ background: colors.lightGrey, color: colors.menuGrey }} onClick={onClick}>
      <Menu.Item style={{ color: colors.menuGrey }} key="1">
        augsburg
      </Menu.Item>
      <Menu.Item key="2">münchen</Menu.Item>
      <Menu.Item key="3">berlin</Menu.Item>
    </Menu>
  );

  function onClick({ key }) {
    message.info(`Click on item ${key}`);
  }

  return (
    <ChooseCityContainer>
      <Dropdown overlay={menu}>
        <button
          style={{ color: 'blue', height: '100%', width: '30rem' }}
          //   className="ant-dropdown-link"
          onClick={e => e.preventDefault()}>
          wähle deine stadt
          <DownOutlined />
        </button>
      </Dropdown>
    </ChooseCityContainer>
  );
}
