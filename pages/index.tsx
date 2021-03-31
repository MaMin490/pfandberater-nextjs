import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

import { theme } from '../static/global/colors';
import { device } from '../static/global/media-query';

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

  animation: fadeIn ease 20s;
  -webkit-animation: fadeIn ease 20s;
  -moz-animation: fadeIn ease 20s;
  -o-animation: fadeIn ease 20s;
  -ms-animation: fadeIn ease 20s;

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

const BUTTON = styled.button`
font-size: 1.3rem;
  position: absolute;
  margin-top: 0.5rem;
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: ${colors.menuGrey};
  background: ${colors.black};
  cursor: pointer;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -5%);

  z-index: 0;
  border-radius: 10px;

  &:before {
    content: '';
    background: linear-gradient(45deg, #fedb37, #fdb931, #9f7928, #8a6e2f, #ffffff, #ffffac, #d1b464, #5d4a1f, #5d4a1f);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }
  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media ${device.tablet} {
    margin-top: 2rem;
    font-size: 1.8rem;    
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
        <DIV>
          <BUTTON>SEI DABEI</BUTTON>
        </DIV>
      </CONTAINER>
    </>
  );
}
