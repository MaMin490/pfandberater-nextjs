import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../components/common/Button';

describe('Button', () => {
  it('should render correctly', () => {
    const component = shallow(<Button />);

    expect(component).toMatchSnapshot();
  });
});
