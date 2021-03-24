import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../components/includes/header';

describe('Header', () => {
  it('should render correctly', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
