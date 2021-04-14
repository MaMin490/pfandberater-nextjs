import React from 'react';
import { shallow } from 'enzyme';

import ChooseCity from '../../../../components/home/ChooseCity';

describe('ChooseCity', () => {
  it('should render correctly', () => {
    const component = shallow(<ChooseCity />);

    expect(component).toMatchSnapshot();
  });
});
