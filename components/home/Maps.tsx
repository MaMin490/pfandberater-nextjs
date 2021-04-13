import React from 'react';
import styled from 'styled-components';

import { theme } from '../../public/global/colors';
import ChooseCity from './ChooseCity';
const { colors } = theme;

const MapContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${colors.menuGrey};
  transform: translate(-50%, 8rem);
`;

export default function Maps(): JSX.Element {
  return (
    <MapContainer>
      <ChooseCity />
    </MapContainer>
  );
}
