import React from 'react';
import styled from 'styled-components';

import { theme } from '../public/global/colors';
import { device } from '../public/global/media-query';
import HowTo from '../components/home/HowTo';
import ButtonPrimary from '../components/common/Button';
import Maps from '../components/home/Maps';
import Divider from '../components/common/Divider';

const { colors } = theme;

const CONTAINER = styled.div`
  margin: 0 1.5rem;

  @media ${device.tablet} {
    margin: 0 5rem;
  }

  @media ${device.laptop} {
    margin: 0 13rem;
  }
`;

const H1 = styled.h1`
  color: ${colors.menuGrey};
  text-align: center;
  margin: 0.9rem 0 0 0;
  font-size: 1.3rem;

  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-1000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-1000px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;

const H2 = styled.h2`
  color: ${colors.menuGrey};
  text-align: center;
  margin: 0.15rem 0 0.65rem 0;
  font-size: 1.8rem;

  animation: fadeIn ease 10s;
  -webkit-animation: fadeIn ease 10s;
  -moz-animation: fadeIn ease 10s;
  -o-animation: fadeIn ease 10s;
  -ms-animation: fadeIn ease 10s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    margin-top: 0.3rem;
    font-size: 2.5rem;
  }
`;

const DIV = styled.div`
  position: relative;
`;

export default function Home(): JSX.Element {
  return (
    <>
      <CONTAINER>
        <H1>willkommen</H1>
        <H2>so funktionierts</H2>
        <HowTo />
        <DIV>
          <ButtonPrimary />
        </DIV>
      </CONTAINER>
      <DIV>
        <Divider />
      </DIV>
      <CONTAINER>
        <DIV>
          <Maps />
        </DIV>
      </CONTAINER>
    </>
  );
}
