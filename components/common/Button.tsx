import React from 'react';
import styled from 'styled-components';

import { theme } from '../../public/global/colors';
import { device } from '../../public/global/media-query';

const { colors } = theme;

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
  transform: translate(-50%, 1rem);

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

export default function ButtonPrimary(): JSX.Element {
  return <BUTTON>sei dabei</BUTTON>;
}
