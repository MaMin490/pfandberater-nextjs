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

// const IMG = styled.img`
//   height: 20rem;

//   }
// `;

export default function HowTo(): JSX.Element {
  return (
    <Carousel autoplay>
      <div>
        {/* <IMG src="/CTCLogo.png" alt="bladfewf" /> */}
        <H3>1</H3>
      </div>
      <div>
        {/* <IMG src="/how-to-2.jpg" alt="bladfewf" /> */}
        <H3>2</H3>
      </div>
      <div>
        {/* <IMG src="/How-To.png" alt="bladfewf" /> */}
        <H3>3</H3>
      </div>
    </Carousel>
  );
}
