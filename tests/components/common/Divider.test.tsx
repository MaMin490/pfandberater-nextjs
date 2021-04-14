import React from 'react';
import { shallow } from 'enzyme';

import Divider from '../../../components/common/Divider';

describe('Divider', () => {
  it('should render correctly', () => {
    const component = shallow(<Divider />);

    expect(component).toMatchSnapshot();
  });
});
