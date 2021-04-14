import React from 'react';
import styled from 'styled-components';
import { Divider as DIVIDER } from 'antd';

import { theme } from '../../public/global/colors';
import { device } from '../../public/global/media-query';

const { colors } = theme;

const DIVIDER_CONTAINER = styled.div`
  @media ${device.tablet} {
    margin: 1.5rem 0;
  }

  @media ${device.laptop} {
    margin: 2.5rem 0;
  }
`;

export default function Divider(): JSX.Element {
  return (
    <DIVIDER_CONTAINER>
      <DIVIDER
        orientation="right"
        style={{
          color: colors.mint,
          borderTop: colors.menuGrey,
          position: 'absolute',
          transform: 'translate(-50%, 5.5rem)',
          top: '50%',
          left: '50%',
        }}>
        location
      </DIVIDER>
    </DIVIDER_CONTAINER>
  );
}
