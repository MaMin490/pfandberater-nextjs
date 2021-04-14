import React from 'react';
import { shallow } from 'enzyme';

import HowTo from '../../../../components/home/HowTo';

describe('HowTo', () => {
  it('should render correctly', () => {
    const component = shallow(<HowTo />);

    expect(component).toMatchSnapshot();
  });
});
