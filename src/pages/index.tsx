import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

import { theme } from '../static/global/colors';
import { device } from '../static/global/media-query';

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

const H1 = styled.h1`
  color: ${colors.menuGrey};
  text-align: center;
  margin: 0.9rem 0 0 0;
  font-size: 1.3rem;

  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;

const H2 = styled.h2`
  color: ${colors.menuGrey};
  text-align: center;
  margin: 0.15rem 0 0.65rem 0;
  font-size: 1.8rem;

  @media ${device.tablet} {
      margin-top: 0.3rem;
    font-size: 2.5rem;
  }
`;

export default function Home(): JSX.Element {
  return (
    <>
      <H1>willkommen</H1>
      <H2>so funktionierts</H2>
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
    </>
  );
}
