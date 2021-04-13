import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../../components/includes/footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
