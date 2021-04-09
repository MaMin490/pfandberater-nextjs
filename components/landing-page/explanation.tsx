import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

import { device } from '../../public/global/media-query';
import { theme } from '../../public/global/colors';

const { colors } = theme;

const H3 = styled.h3`
  height: 20rem;
  color: white;
  line-height: 15rem;
  text-align: center;
  background: ${colors.lightGrey};

  @media ${device.tablet} {
    height: 35rem;
  }
`;

export default function Explanation(): JSX.Element {
  return (
    <Carousel autoplay>
      <div>
        <H3>1</H3>
      </div>
      <div>
        <H3>2</H3>
      </div>
      <div>
        <H3>3</H3>
      </div>
    </Carousel>
  );
}
