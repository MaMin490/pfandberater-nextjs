import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { theme } from '../../public/global/colors';

const { colors } = theme;

const ChooseCityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 29rem;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${colors.menuGrey};
  transform: translate(-50%, 2rem);
`;

const MENU = styled(Menu)`
  background: ${colors.lightGrey};
  color: ${colors.menuGrey};
  border: none;
`;

const MENU_ITEM = styled(Menu.Item)`
  color: ${colors.red};
`;

const Button = styled.button`
  color: ${colors.red};
  background: ${colors.grey};
  border: none;
  margin-left: 0.9rem;
`;

export default function ChooseCity(): JSX.Element {
  const menu = (
    <MENU onClick={onClick}>
      <MENU_ITEM key="1">augsburg</MENU_ITEM>
      <MENU_ITEM key="2">münchen</MENU_ITEM>
      <MENU_ITEM key="3">berlin</MENU_ITEM>
    </MENU>
  );

  function onClick({ key }): void {
    message.info(`Click on item ${key}`);
  }

  return (
    <ChooseCityContainer>
      <div>wähle deine</div>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button onClick={e => e.preventDefault()}>
          stadt
          <DownOutlined style={{ fontSize: '1.3rem' }} />
        </Button>
      </Dropdown>
    </ChooseCityContainer>
  );
}
